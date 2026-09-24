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
const translate = window.siteI18n.getTranslation;

function setTheme(theme) {
  const isDark = theme === "dark";
  const toggleLabel = isDark
    ? translate("theme.light")
    : translate("theme.dark");
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", toggleLabel);
  themeToggle.setAttribute("title", toggleLabel);
  themeColor.setAttribute("content", isDark ? "#0b1210" : "#f7f5ee");
}

setTheme(document.documentElement.dataset.theme || "light");

document.addEventListener("site-language-change", () => {
  setTheme(document.documentElement.dataset.theme || "light");
});

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
    : translate("form.validation.contact");
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
    : translate("form.validation.captcha");
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

  const isNameValid = validateRequiredField(
    nameField,
    translate("form.validation.name"),
  );
  const isContactValid = validateContactField(contactField);
  const isInterestValid = validateRequiredField(
    interestField,
    translate("form.validation.interest"),
  );
  const isCaptchaValid = validateCaptcha(consultationForm);

  if (!isNameValid || !isContactValid || !isInterestValid || !isCaptchaValid) {
    setFormStatus(
      statusElement,
      translate("form.validation.invalid"),
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
  submitButton.textContent = translate("form.sending.button");
  setFormStatus(statusElement, translate("form.sending.status"), "loading");

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
      translate("form.success"),
      "success",
    );
  } catch (error) {
    console.error("Consultation form submission failed.", error);
    setFormStatus(
      statusElement,
      translate("form.error"),
      "error",
    );
  } finally {
    submitButton.textContent = translate("form.submit");
    submitButton.disabled = false;
    consultationForm.removeAttribute("aria-busy");
  }
});
