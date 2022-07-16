let popupContainer = document.querySelector('.popup');
let addButtonPopup = document.querySelector('.profile__edit_button');
let closeButtonPopup = document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');
let fullNameProfile = document.querySelector('.profile__title');
let professionProfile = document.querySelector('.profile__paragraph');
let fullNameForm = document.querySelector('.popup__input_form_name');
let professionForm = document.querySelector('.popup__input_form_profession');

let popupOpane = function() {
    popupContainer.classList.add('popup_opened');
    fullNameForm.value = fullNameProfile.textContent;
    professionForm.value = professionProfile.textContent;
};

let popupClose = function() {
    popupContainer.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    fullNameProfile.textContent = fullNameForm.value;
    professionProfile.textContent = professionForm.value;
    popupClose();
}

addButtonPopup.addEventListener('click', popupOpane);
closeButtonPopup.addEventListener('click', popupClose);

form.addEventListener('submit', formSubmitHandler);
