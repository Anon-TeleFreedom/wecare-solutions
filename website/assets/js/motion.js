const reducedMotionQuery = matchMedia("(prefers-reduced-motion: reduce)");
const entranceAnimations = new Set();

const REVEAL_GROUPS = [
  { selector: ".problem-grid > p", step: 80 },
  { selector: "#solutions .section-heading > *", step: 100 },
  { selector: ".solution-carousel", style: "scale" },
  { selector: ".process-intro", style: "scale" },
  { selector: ".process-list > li", step: 80 },
  { selector: "#integrations .section-heading > *", step: 100 },
  { selector: ".integration-list > span", step: 55 },
  { selector: ".integration-note" },
  { selector: ".fit-grid > div:first-child", style: "scale" },
  { selector: ".fit-list > article", step: 80 },
  { selector: ".contact-copy", style: "scale" },
  { selector: ".contact-form", style: "scale" },
  { selector: ".footer-grid" },
];

function playEntrance(element, keyframes, delay = 0) {
  const animation = element.animate(keyframes, {
    duration: 680,
    delay,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "both",
  });

  entranceAnimations.add(animation);
  animation.onfinish = () => {
    entranceAnimations.delete(animation);
    animation.cancel();
  };
}

function animatePageEntrance() {
  if (reducedMotionQuery.matches || !("animate" in Element.prototype)) return;

  const header = document.querySelector(".header-inner");
  const heroItems = document.querySelectorAll(".hero-content > *");
  const preview = document.querySelector(".monitor-preview");

  if (header) {
    playEntrance(
      header,
      [
        { opacity: 0, transform: "translateY(-12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      40,
    );
  }

  heroItems.forEach((element, index) => {
    playEntrance(
      element,
      [
        { opacity: 0, transform: "translateY(22px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      100 + index * 85,
    );
  });

  if (preview) {
    playEntrance(
      preview,
      [
        { opacity: 0, transform: "translateX(28px) scale(0.98)" },
        { opacity: 1, transform: "translateX(0) scale(1)" },
      ],
      220,
    );
  }
}

function collectRevealItems() {
  return REVEAL_GROUPS.flatMap(({ selector, step = 0, style }) =>
    Array.from(document.querySelectorAll(selector)).map((element, index) => ({
      element,
      delay: Math.min(index * step, 280),
      style,
    })),
  );
}

function initializeScrollReveal() {
  if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  collectRevealItems().forEach(({ element, delay, style }) => {
    // Already visible content must never wait for an intersection event.
    if (element.getBoundingClientRect().top < innerHeight * 0.92) return;

    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.classList.add("reveal-pending");
    if (style === "scale") element.classList.add("reveal-scale");

    observer.observe(element);
  });

  document.addEventListener("focusin", (event) => {
    const element = event.target.closest(".reveal-pending");
    if (!element) return;
    element.classList.add("is-visible");
    observer.unobserve(element);
  });

  reducedMotionQuery.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    document.querySelectorAll(".reveal-pending").forEach((element) => {
      element.classList.add("is-visible");
    });
  });
}

function initializeAmbientMotion() {
  if (reducedMotionQuery.matches) return;
  document.documentElement.classList.add("motion-enabled");
  document.querySelectorAll(".uptime-bars span").forEach((bar, index) => {
    bar.style.setProperty("--motion-index", index);
  });

  const preview = document.querySelector(".monitor-preview");
  if (!preview || !("IntersectionObserver" in window)) return;
  let inViewport = false;
  const updateAmbientState = () => {
    preview.classList.toggle("ambient-paused", !inViewport || document.hidden);
  };
  const observer = new IntersectionObserver(([entry]) => {
    inViewport = entry.isIntersecting;
    updateAmbientState();

    if (entry.isIntersecting && !preview.dataset.chartAnimated) {
      preview.dataset.chartAnimated = "true";
      animateChartBars(preview);
    }

    if (entry.isIntersecting && !preview.dataset.countAnimated) {
      preview.dataset.countAnimated = "true";
      animateCatalogCount(preview.querySelector(".uptime-panel > strong"));
    }
  });
  observer.observe(preview);
  document.addEventListener("visibilitychange", updateAmbientState);
}

function animateChartBars(preview) {
  if (reducedMotionQuery.matches || !("animate" in Element.prototype)) return;

  preview.querySelectorAll(".uptime-bars span").forEach((bar, index) => {
    const entrance = bar.animate(
      [
        { opacity: 0.12, transform: "scaleY(0.04)" },
        { opacity: 1, transform: "scaleY(1)" },
      ],
      {
        duration: 520,
        delay: index * 48,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
      },
    );

    entrance.onfinish = () => entrance.cancel();
  });
}

function animateCatalogCount(counter) {
  if (!counter || reducedMotionQuery.matches) return;

  const target = Number(counter.textContent.trim());
  if (!Number.isFinite(target) || target <= 0) return;

  const duration = 1100;
  const startedAt = performance.now();
  counter.classList.add("is-counting");
  counter.addEventListener(
    "animationend",
    () => counter.classList.remove("is-counting"),
    { once: true },
  );
  const updateCount = (now) => {
    if (reducedMotionQuery.matches) {
      counter.textContent = String(target).padStart(2, "0");
      return;
    }

    const progress = Math.min((now - startedAt) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    counter.textContent = String(Math.round(target * easedProgress)).padStart(
      2,
      "0",
    );

    if (progress < 1) requestAnimationFrame(updateCount);
  };

  counter.textContent = "00";
  requestAnimationFrame(updateCount);
}

function initializeScrollProgress() {
  if (reducedMotionQuery.matches) return;

  let frameRequested = false;

  const updateProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - innerHeight;
    const progress = scrollableHeight > 0 ? scrollY / scrollableHeight : 0;
    document.documentElement.style.setProperty(
      "--scroll-progress",
      `${Math.min(progress, 1)}`,
    );
    frameRequested = false;
  };

  const requestProgressUpdate = () => {
    if (frameRequested || reducedMotionQuery.matches) return;
    frameRequested = true;
    requestAnimationFrame(updateProgress);
  };

  window.addEventListener("scroll", requestProgressUpdate, { passive: true });
  window.addEventListener("resize", requestProgressUpdate);

  updateProgress();
}

function initializePreviewSpotlight() {
  if (reducedMotionQuery.matches || !matchMedia("(hover: hover)").matches) {
    return;
  }

  const preview = document.querySelector(".monitor-preview");
  if (!preview) return;

  let pointerFrame;
  preview.addEventListener("pointermove", (event) => {
    if (reducedMotionQuery.matches) return;
    cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      const bounds = preview.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      preview.style.setProperty("--spotlight-x", `${x}%`);
      preview.style.setProperty("--spotlight-y", `${y}%`);
    });
  });

  preview.addEventListener("pointerleave", () => {
    cancelAnimationFrame(pointerFrame);
    preview.style.removeProperty("--spotlight-x");
    preview.style.removeProperty("--spotlight-y");
  });
}

reducedMotionQuery.addEventListener("change", (event) => {
  if (!event.matches) return;
  entranceAnimations.forEach((animation) => animation.cancel());
  entranceAnimations.clear();
});

animatePageEntrance();
initializeScrollReveal();
initializeAmbientMotion();
initializeScrollProgress();
initializePreviewSpotlight();
