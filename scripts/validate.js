const forms = [
    {
    formClass: 'popup__form[name="edit-form"]',
    buttonClass: 'popup__form-btn',
    buttonInvalidClass: 'popup__button-invalid',
    }, 
    {
    formClass: 'popup__form[name="form-add-card"]',
    buttonClass: 'popup__form-btn',
    buttonInvalidClass: 'popup__button-invalid',
    }];
function setSubmitButtonState(form, config) {
    const button = form.querySelector('.' + config.buttonClass);
    const isValid = form.checkValidity();
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove(config.buttonInvalidClass);
    } else {
        button.setAttribute('disabled', true); 
        button.classList.add(config.buttonInvalidClass);
    }
};
function showFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
}
function handleFormInput(e, config) {
    const input = e.target;
    const form = e.currentTarget;
    showFieldError(input);
    setSubmitButtonState(form, config);
};
function enableValidation(config) {
    const form = document.querySelector('.' + config.formClass);
    form.addEventListener('input', (e)=> handleFormInput(e, config));
}
forms.forEach(form => {
    enableValidation(form);
});
