const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");
const consultationForm = document.querySelector("#consultation-form");
const contactField = document.querySelector("#contact-method");
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

function isValidEmail(value) {
  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
  );
}

function isValidPhone(value) {
  const normalizedPhone = value.replace(/[\s().-]/g, "");
  return /^\+?\d{9,15}$/.test(normalizedPhone);
}

function validateContactField(field) {
  const value = field.value.trim();
  const isValid = isValidEmail(value) || isValidPhone(value);
  const message = isValid
    ? ""
    : "Nhập email hợp lệ hoặc số điện thoại từ 9 đến 15 chữ số.";
  showFieldError(field, message);
  return isValid;
}

function validateCaptcha(form) {
  const captchaResponse = form.querySelector(
    `[name="g-recaptcha-response"]`,
  );
  const captchaContainer = form.querySelector(".captcha-field");
  const errorElement = form.querySelector(`[data-error-for="captcha"]`);
  const isValid = Boolean(captchaResponse?.value.trim());

  captchaContainer.setAttribute("aria-invalid", String(!isValid));
  errorElement.textContent = isValid
    ? ""
    : "Vui lòng xác nhận bạn không phải là robot.";
  return isValid;
}

function setFormStatus(element, message, state) {
  element.textContent = message;
  element.dataset.state = state;
}

contactField.addEventListener("blur", () => validateContactField(contactField));
contactField.addEventListener("input", () => {
  if (contactField.getAttribute("aria-invalid") === "true") {
    validateContactField(contactField);
  }
});

consultationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nameField = consultationForm.elements.name;
  const statusElement = document.querySelector("#form-status");
  const submitButton = consultationForm.querySelector('[type="submit"]');
  const submitLabel = submitButton.textContent;

  const isNameValid = validateRequiredField(
    nameField,
    "Vui lòng nhập tên của bạn.",
  );
  const isContactValid = validateContactField(contactField);
  const isInterestValid = validateRequiredField(
    interestField,
    "Vui lòng chọn sản phẩm hoặc dịch vụ bạn quan tâm.",
  );
  const isCaptchaValid = validateCaptcha(consultationForm);

  if (!isNameValid || !isContactValid || !isInterestValid || !isCaptchaValid) {
    setFormStatus(
      statusElement,
      "Không thể gửi. Vui lòng kiểm tra các trường được đánh dấu.",
      "error",
    );
    const firstInvalidField = consultationForm.querySelector(
      `input[aria-invalid="true"], select[aria-invalid="true"]`,
    );

    if (firstInvalidField) {
      firstInvalidField.focus();
    } else {
      consultationForm
        .querySelector(".captcha-field")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  submitButton.disabled = true;
  consultationForm.setAttribute("aria-busy", "true");
  submitButton.textContent = "Đang gửi...";
  setFormStatus(statusElement, "Đang gửi yêu cầu của bạn...", "loading");

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(consultationForm)).toString(),
    });

    if (!response.ok || response.redirected) {
      throw new Error(`Form submission failed with status ${response.status}`);
    }

    consultationForm.reset();
    window.grecaptcha?.reset();
    setFormStatus(
      statusElement,
      "Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm.",
      "success",
    );
  } catch (error) {
    console.error("Consultation form submission failed.", error);
    setFormStatus(
      statusElement,
      "Không thể gửi yêu cầu lúc này. Vui lòng kiểm tra CAPTCHA và thử lại.",
      "error",
    );
  } finally {
    submitButton.textContent = submitLabel;
    submitButton.disabled = false;
    consultationForm.removeAttribute("aria-busy");
  }
});
