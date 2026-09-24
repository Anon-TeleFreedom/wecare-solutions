const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");
const consultationForm = document.querySelector("#consultation-form");
const interestField = document.querySelector("#interest");
const interestLinks = document.querySelectorAll("[data-interest]");

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

consultationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameField = consultationForm.elements.name;
  const contactField = consultationForm.elements.contact;
  const statusElement = document.querySelector("#form-status");

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

  statusElement.textContent =
    "Thông tin hợp lệ. Form chưa kết nối backend nên dữ liệu chưa được gửi.";
});
