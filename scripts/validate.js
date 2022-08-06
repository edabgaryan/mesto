const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__form-btn",
  inactiveButtonClass: "popup__form-btn_disabled",
  buttonWithFormValidity: "popup__form-btn_hover",
  inputErrorClass: "popup__input_border-bottom_red",
  inputValidity: "popup__input_border-bottom_black",
  errorVisibility: "popup__input-text_error-visible",
};
function startFormValidaton(popup) {
  const inputList = Array.from(
    popup.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = popup.querySelector(
    validationConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    if (inputElement.validity.valid) {
      inputElement.classList.remove(validationConfig.inputErrorClass);
      inputElement.classList.add(validationConfig.inputValidity);
      popup.querySelector(`.${inputElement.name}_error`).textContent = "";
    } else {
      inputElement.classList.remove(validationConfig.inputErrorClass);
      inputElement.classList.add(validationConfig.inputValidity);
    }
  });
}
function enableValidation(validationConfig) {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation(validationConfig);

function setEventListeners(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.remove(validationConfig.buttonWithFormValidity);
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.add(validationConfig.buttonWithFormValidity);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
} //

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.name}_error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  inputElement.classList.remove(validationConfig.inputValidity);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorVisibility);
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.name}_error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  inputElement.classList.add(validationConfig.inputValidity);
  errorElement.classList.remove(validationConfig.errorVisibility);
  errorElement.textContent = "";
}
