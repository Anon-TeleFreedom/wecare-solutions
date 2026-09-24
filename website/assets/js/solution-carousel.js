const carouselTrack = document.querySelector("#solution-track");

const CAROUSEL_CLONE_ATTRIBUTE = "data-carousel-clone";
const DRAG_THRESHOLD_PX = 5;
const SCROLL_END_FALLBACK_MS = 220;
const AUTOPLAY_INTERVAL_MS = 2400;
const AUTOPLAY_SCROLL_DURATION_MS = 700;

function initializeSolutionCarousel(track) {
  const carousel = track.closest(".solution-carousel");
  const originalCards = Array.from(track.querySelectorAll(".solution-card"));
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
  let autoplayTimer;
  let autoplayFrame;
  let isAutoplayScrolling = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let isDragging = false;
  let suppressClick = false;
  let isPointerInteracting = false;
  let hasKeyboardFocus = false;
  let carouselInViewport = !("IntersectionObserver" in window);

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
    const nextPosition = String(logicalIndex + 1).padStart(2, "0");
    const positionChanged = positionLabel.textContent !== nextPosition;
    positionLabel.textContent = nextPosition;

    if (positionChanged && !prefersReducedMotion.matches) {
      positionLabel.classList.remove("is-updating");
      requestAnimationFrame(() => positionLabel.classList.add("is-updating"));
    }
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

  function pauseAutoplay() {
    clearTimeout(autoplayTimer);
    autoplayTimer = undefined;
  }

  function cancelAutoplayScroll() {
    if (autoplayFrame) cancelAnimationFrame(autoplayFrame);
    autoplayFrame = undefined;
    if (!isAutoplayScrolling) return;

    isAutoplayScrolling = false;
    track.classList.remove("is-autoplaying");
    updatePosition(findNearestPhysicalIndex());
  }

  function animateAutoplayScroll() {
    const nextIndex = currentPhysicalIndex + 1;
    const start = track.scrollLeft;
    const target = cardOffsets[nextIndex];
    const startedAt = performance.now();

    if (target === undefined || Math.abs(target - start) < 1) {
      scrollToPhysicalIndex(nextIndex, "auto");
      scheduleAutoplay();
      return;
    }

    isAutoplayScrolling = true;
    track.classList.add("is-autoplaying");

    function step(now) {
      if (!isAutoplayScrolling) return;

      const progress = Math.min((now - startedAt) / AUTOPLAY_SCROLL_DURATION_MS, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      track.scrollLeft = start + (target - start) * eased;

      if (progress < 1) {
        autoplayFrame = requestAnimationFrame(step);
        return;
      }

      autoplayFrame = undefined;
      isAutoplayScrolling = false;
      track.scrollLeft = target;
      track.classList.remove("is-autoplaying");
      updatePosition(nextIndex);
      normalizeLoopPosition();
      scheduleAutoplay();
    }

    autoplayFrame = requestAnimationFrame(step);
  }

  function scheduleAutoplay(delay = AUTOPLAY_INTERVAL_MS) {
    pauseAutoplay();
    if (
      prefersReducedMotion.matches ||
      document.hidden ||
      isPointerInteracting ||
      !carouselInViewport ||
      hasKeyboardFocus
    ) {
      return;
    }

    autoplayTimer = setTimeout(animateAutoplayScroll, delay);
  }

  function finishScrolling() {
    if (isAutoplayScrolling) return;
    normalizeLoopPosition();
    scheduleAutoplay();
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
    scrollEndTimer = setTimeout(finishScrolling, SCROLL_END_FALLBACK_MS);
  }

  function startMouseDrag(event) {
    isPointerInteracting = true;
    pauseAutoplay();
    cancelAutoplayScroll();
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
    isPointerInteracting = false;
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
    pauseAutoplay();
    cancelAutoplayScroll();
    moveBy(event.key === "ArrowRight" ? 1 : -1);
  }

  function maintainPositionAfterResize() {
    cancelAutoplayScroll();
    refreshCardOffsets();
    scrollToPhysicalIndex(currentPhysicalIndex, "auto");
  }

  function handleUserScroll() {
    pauseAutoplay();
    cancelAutoplayScroll();
  }

  addLoopClones();
  refreshCardOffsets();
  scrollToPhysicalIndex(solutionCount, "auto");

  track.addEventListener("scroll", updatePositionDuringScroll, { passive: true });
  if (supportsScrollEnd) {
    track.addEventListener("scrollend", finishScrolling);
  } else {
    track.addEventListener("scroll", scheduleScrollEndFallback, { passive: true });
  }
  track.addEventListener("keydown", handleKeyboardNavigation);
  track.addEventListener("wheel", handleUserScroll, { passive: true });
  carousel.addEventListener("focusin", () => {
    requestAnimationFrame(() => {
      hasKeyboardFocus = carousel.contains(document.activeElement) &&
        document.activeElement.matches(":focus-visible");
      if (hasKeyboardFocus) {
        pauseAutoplay();
        cancelAutoplayScroll();
      }
    });
  });
  carousel.addEventListener("focusout", (event) => {
    requestAnimationFrame(() => {
      hasKeyboardFocus = carousel.contains(document.activeElement) &&
        document.activeElement.matches(":focus-visible");
      if (!hasKeyboardFocus) scheduleAutoplay();
    });
  });
  track.addEventListener("pointerup", () => {
    isPointerInteracting = false;
    scheduleAutoplay(1200);
  });
  track.addEventListener("pointercancel", () => {
    isPointerInteracting = false;
    scheduleAutoplay();
  });
  track.addEventListener("pointerdown", startMouseDrag);
  track.addEventListener("pointermove", continueMouseDrag);
  track.addEventListener("pointerup", stopMouseDrag);
  track.addEventListener("pointercancel", stopMouseDrag);
  track.addEventListener("click", preventClickAfterDrag, true);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseAutoplay();
      cancelAutoplayScroll();
    }
    else scheduleAutoplay();
  });
  prefersReducedMotion.addEventListener("change", () => {
    if (prefersReducedMotion.matches) {
      pauseAutoplay();
      cancelAutoplayScroll();
    }
    else scheduleAutoplay();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      carouselInViewport = entry.isIntersecting;
      if (carouselInViewport) scheduleAutoplay();
      else {
        pauseAutoplay();
        cancelAutoplayScroll();
      }
    }, { threshold: 0.15 }).observe(carousel);
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(maintainPositionAfterResize).observe(track);
  } else {
    window.addEventListener("resize", maintainPositionAfterResize);
  }

  scheduleAutoplay();
}

if (carouselTrack) initializeSolutionCarousel(carouselTrack);
