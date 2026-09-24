const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");
const consultationForm = document.querySelector("#consultation-form");
const interestField = document.querySelector("#interest");
const interestLinks = document.querySelectorAll("[data-interest]");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const scrollTopButton = document.querySelector(".scroll-top");
const topSection = document.querySelector("#top");

function setTheme(theme) {
  const isDark = theme === "dark";
  const toggleLabel = isDark
    ? "Chuyển sang giao diện sáng"
    : "Chuyển sang giao diện tối";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", toggleLabel);
  themeToggle.setAttribute("title", toggleLabel);
  themeColor.setAttribute("content", isDark ? "#0b1210" : "#f7f5ee");
}

setTheme(document.documentElement.dataset.theme || "light");

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("webcare-theme", nextTheme);
  } catch {
    // Theme still applies when browser storage is unavailable.
  }
});

function setScrollTopVisible(isVisible) {
  scrollTopButton.classList.toggle("is-visible", isVisible);
  scrollTopButton.setAttribute("aria-hidden", String(!isVisible));
  scrollTopButton.tabIndex = isVisible ? 0 : -1;
}

const topSectionObserver = new IntersectionObserver(
  ([entry]) => setScrollTopVisible(!entry.isIntersecting),
  { threshold: 0 },
);

topSectionObserver.observe(topSection);

scrollTopButton.addEventListener("click", () => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

interestLinks.forEach((link) => {
  link.addEventListener("click", () => {
    interestField.value = link.dataset.interest;
  });
});

function showFieldError(field, message) {
  const errorElement = document.querySelector(`[data-error-for="${field.id}"]`);
  field.setAttribute("aria-invalid", String(Boolean(message)));
  errorElement.textContent = message;
}

function validateRequiredField(field, message) {
  const isValid = field.value.trim().length > 0;
  showFieldError(field, isValid ? "" : message);
  return isValid;
}

consultationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nameField = consultationForm.elements.name;
  const contactField = consultationForm.elements.contact;
  const statusElement = document.querySelector("#form-status");
  const submitButton = consultationForm.querySelector('[type="submit"]');

  const isNameValid = validateRequiredField(
    nameField,
    "Vui lòng nhập tên của bạn.",
  );
  const isContactValid = validateRequiredField(
    contactField,
    "Vui lòng nhập email hoặc số điện thoại.",
  );
  const isInterestValid = validateRequiredField(
    interestField,
    "Vui lòng chọn giải pháp bạn quan tâm.",
  );

  if (!isNameValid || !isContactValid || !isInterestValid) {
    statusElement.textContent = "Vui lòng kiểm tra các trường bắt buộc.";
    consultationForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  submitButton.disabled = true;
  consultationForm.setAttribute("aria-busy", "true");
  statusElement.textContent = "Đang gửi yêu cầu...";

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(consultationForm)).toString(),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed with status ${response.status}`);
    }

    consultationForm.reset();
    statusElement.textContent = "Đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm.";
  } catch (error) {
    console.error("Consultation form submission failed.", error);
    statusElement.textContent =
      "Chưa gửi được yêu cầu. Vui lòng thử lại sau khi website đã được deploy.";
  } finally {
    submitButton.disabled = false;
    consultationForm.removeAttribute("aria-busy");
  }
});
