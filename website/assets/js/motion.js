const reducedMotionQuery = matchMedia("(prefers-reduced-motion: reduce)");

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

  animation.onfinish = () => animation.cancel();
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
    if (element.getBoundingClientRect().top < innerHeight * 0.92) return;
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.classList.add("reveal-pending");
    if (style === "scale") element.classList.add("reveal-scale");
    observer.observe(element);
  });
}

function initializeAmbientMotion() {
  if (reducedMotionQuery.matches) return;
  document.documentElement.classList.add("motion-enabled");
  document.querySelectorAll(".uptime-bars span").forEach((bar, index) => {
    bar.style.setProperty("--motion-index", index);
  });
}

animatePageEntrance();
initializeScrollReveal();
initializeAmbientMotion();
