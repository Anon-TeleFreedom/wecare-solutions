const carouselTrack = document.querySelector("#solution-track");

const CAROUSEL_CLONE_ATTRIBUTE = "data-carousel-clone";
const DRAG_THRESHOLD_PX = 5;
const SCROLL_END_FALLBACK_MS = 220;

function initializeSolutionCarousel(track) {
  const carousel = track.closest(".solution-carousel");
  const originalCards = Array.from(track.querySelectorAll(".solution-card"));
  const previousButton = carousel.querySelector("[data-solution-previous]");
  const nextButton = carousel.querySelector("[data-solution-next]");
  const positionLabel = carousel.querySelector("[data-solution-current]");

  if (originalCards.length === 0) return;

  const solutionCount = originalCards.length;
  const prefersReducedMotion = matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const supportsScrollEnd = "onscrollend" in track;

  let renderedCards = [];
  let cardOffsets = [];
  let currentPhysicalIndex = solutionCount;
  let scrollAnimationFrame;
  let dragAnimationFrame;
  let pendingDragScrollLeft;
  let scrollEndTimer;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let isDragging = false;
  let suppressClick = false;

  function createClone(card) {
    const clone = card.cloneNode(true);
    clone.setAttribute(CAROUSEL_CLONE_ATTRIBUTE, "true");
    clone.setAttribute("aria-hidden", "true");
    clone
      .querySelectorAll("a, button, input, select, textarea")
      .forEach((element) => {
        element.tabIndex = -1;
      });
    return clone;
  }

  function addLoopClones() {
    [...originalCards].reverse().forEach((card) => {
      track.insertBefore(createClone(card), track.firstChild);
    });
    originalCards.forEach((card) => track.append(createClone(card)));
    renderedCards = Array.from(track.querySelectorAll(".solution-card"));
  }

  function refreshCardOffsets() {
    const trackOffset = track.offsetLeft;
    cardOffsets = renderedCards.map((card) => card.offsetLeft - trackOffset);
  }

  function getLogicalIndex(physicalIndex) {
    return (physicalIndex - solutionCount + solutionCount) % solutionCount;
  }

  function updatePosition(physicalIndex) {
    currentPhysicalIndex = physicalIndex;
    const logicalIndex = getLogicalIndex(physicalIndex);
    positionLabel.textContent = String(logicalIndex + 1).padStart(2, "0");
  }

  function findNearestPhysicalIndex() {
    return cardOffsets.reduce((nearestIndex, offset, index) => {
      const currentDistance = Math.abs(offset - track.scrollLeft);
      const nearestDistance = Math.abs(
        cardOffsets[nearestIndex] - track.scrollLeft,
      );
      return currentDistance < nearestDistance ? index : nearestIndex;
    }, 0);
  }

  function scrollToPhysicalIndex(physicalIndex, behavior) {
    currentPhysicalIndex = physicalIndex;
    track.scrollTo({ left: cardOffsets[physicalIndex], behavior });
    updatePosition(physicalIndex);
  }

  function normalizeLoopPosition() {
    if (isDragging) return;

    const physicalIndex = findNearestPhysicalIndex();
    let normalizedIndex = physicalIndex;

    if (physicalIndex < solutionCount) normalizedIndex += solutionCount;
    if (physicalIndex >= solutionCount * 2) normalizedIndex -= solutionCount;

    if (normalizedIndex !== physicalIndex) {
      scrollToPhysicalIndex(normalizedIndex, "auto");
      return;
    }

    updatePosition(physicalIndex);
  }

  function snapToNearestCard() {
    const behavior = prefersReducedMotion.matches ? "auto" : "smooth";
    scrollToPhysicalIndex(findNearestPhysicalIndex(), behavior);
  }

  function moveBy(direction) {
    const behavior = prefersReducedMotion.matches ? "auto" : "smooth";
    scrollToPhysicalIndex(currentPhysicalIndex + direction, behavior);
  }

  function updatePositionDuringScroll() {
    if (scrollAnimationFrame) return;
    scrollAnimationFrame = requestAnimationFrame(() => {
      scrollAnimationFrame = undefined;
      updatePosition(findNearestPhysicalIndex());
    });
  }

  function scheduleScrollEndFallback() {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(normalizeLoopPosition, SCROLL_END_FALLBACK_MS);
  }

  function startMouseDrag(event) {
    if (
      event.pointerType !== "mouse" ||
      event.button !== 0 ||
      event.target.closest("a, button")
    ) {
      return;
    }

    isDragging = true;
    suppressClick = false;
    dragStartX = event.clientX;
    dragStartScrollLeft = track.scrollLeft;
    pendingDragScrollLeft = dragStartScrollLeft;
    clearTimeout(scrollEndTimer);
    track.classList.add("is-dragging");
    track.scrollTo({ left: dragStartScrollLeft, behavior: "auto" });
    track.setPointerCapture(event.pointerId);
  }

  function applyPendingDragPosition() {
    dragAnimationFrame = undefined;
    if (pendingDragScrollLeft === undefined) return;
    track.scrollLeft = pendingDragScrollLeft;
  }

  function continueMouseDrag(event) {
    if (!isDragging) return;

    const pointerEvent = event.getCoalescedEvents?.().at(-1) || event;
    const distance = pointerEvent.clientX - dragStartX;
    if (Math.abs(distance) > DRAG_THRESHOLD_PX) suppressClick = true;
    pendingDragScrollLeft = dragStartScrollLeft - distance;

    if (!dragAnimationFrame) {
      dragAnimationFrame = requestAnimationFrame(applyPendingDragPosition);
    }
  }

  function stopMouseDrag(event) {
    if (!isDragging) return;

    if (dragAnimationFrame) {
      cancelAnimationFrame(dragAnimationFrame);
      applyPendingDragPosition();
    }

    isDragging = false;
    track.classList.remove("is-dragging");

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    requestAnimationFrame(snapToNearestCard);
  }

  function preventClickAfterDrag(event) {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }

  function handleKeyboardNavigation(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    moveBy(event.key === "ArrowRight" ? 1 : -1);
  }

  function maintainPositionAfterResize() {
    refreshCardOffsets();
    scrollToPhysicalIndex(currentPhysicalIndex, "auto");
  }

  addLoopClones();
  refreshCardOffsets();
  scrollToPhysicalIndex(solutionCount, "auto");

  previousButton.addEventListener("click", () => moveBy(-1));
  nextButton.addEventListener("click", () => moveBy(1));
  track.addEventListener("scroll", updatePositionDuringScroll, { passive: true });
  if (supportsScrollEnd) {
    track.addEventListener("scrollend", normalizeLoopPosition);
  } else {
    track.addEventListener("scroll", scheduleScrollEndFallback, { passive: true });
  }
  track.addEventListener("keydown", handleKeyboardNavigation);
  track.addEventListener("pointerdown", startMouseDrag);
  track.addEventListener("pointermove", continueMouseDrag);
  track.addEventListener("pointerup", stopMouseDrag);
  track.addEventListener("pointercancel", stopMouseDrag);
  track.addEventListener("click", preventClickAfterDrag, true);

  if ("ResizeObserver" in window) {
    new ResizeObserver(maintainPositionAfterResize).observe(track);
  } else {
    window.addEventListener("resize", maintainPositionAfterResize);
  }
}

if (carouselTrack) initializeSolutionCarousel(carouselTrack);
