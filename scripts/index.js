import { Card } from './Card.js';
import { initialCards } from './places.js';
import { FormValidator, validationConfig } from './FormValidator.js';

export const selectors = {
  //Popup
  popupFormProfile: ".popup_form_profile",
  popupFormAdd: ".popup_form_add",
  popupOpenPicture: ".popup_open_picture",
  closeButtonPopup: ".popup__close",
  popupFormName: ".popup__form-name",
  popupFormPlace: ".popup__form-place",
  fullNameForm: ".popup__input_form_name",
  professionForm: ".popup__input_form_profession",
  popupPicture: ".popup__picture",
  popupFigcaption: ".popup__figcaption",
  namePlaceFormPopup: ".popup__input_form_name-place",
  placeSourceFormPopup: ".popup__input_form_source-on-place",
  //Profile
  infoButtonProfile: ".profile__info-button",
  addButtonProfile: ".profile__add-button",
  fullNameProfile: ".profile__title",
  professionProfile: ".profile__paragraph",
  //Card
  elementsCard: ".elements__cards",
  card: ".card",
  template: ".template",
  trashButton: ".card__button-delete",
  cardButtonLike: ".card__like",
  cardImage: ".card__image",
  cardTitle: ".card__title",
  
};
//Popup
const popupFormProfile = document.querySelector(selectors.popupFormProfile); // 1-ый ПОПАП
const popupFormAdd = document.querySelector(selectors.popupFormAdd); // 2-ой ПОПАП
export const popupOpenPicture = document.querySelector(selectors.popupOpenPicture); // 3-ый ПОПАП

const fullNameForm = document.querySelector(selectors.fullNameForm); //
const professionForm = document.querySelector(selectors.professionForm); //
const popupFormName = document.querySelector(selectors.popupFormName); //
const popupFormPlace = document.querySelector(selectors.popupFormPlace);


const buttonClosePopupFormProfile = popupFormProfile.querySelector(selectors.closeButtonPopup); //
const buttonClosePopupFormNewPlace = popupFormAdd.querySelector(selectors.closeButtonPopup); //
const buttonClosePopupOpenPicture  = popupOpenPicture.querySelector(selectors.closeButtonPopup); //

const namePlaceFormPopup = document.querySelector(selectors.namePlaceFormPopup);
const placeSourceFormPopup = document.querySelector(selectors.placeSourceFormPopup);
// Profile
const fullNameProfile = document.querySelector(selectors.fullNameProfile); //
const professionProfile = document.querySelector(selectors.professionProfile);
const infoButtonProfile = document.querySelector(selectors.infoButtonProfile); //
const addButtonProfile = document.querySelector(selectors.addButtonProfile);



//Function Открытия Попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}
  
//Function Закрытия Попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}
//Меняем текст имени автора
function openProfilePopup() {
  fullNameForm.value = fullNameProfile.textContent;
  professionForm.value = professionProfile.textContent;
  openPopup(popupFormProfile);
}

// закрытие попапов кнопкой ecs
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}
function closedPopupByClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  };
};


function submitAPopupProfileForm(evt) {
  fullNameProfile.textContent = fullNameForm.value;
  professionProfile.textContent = professionForm.value;
  closePopup(popupFormProfile);
  evt.preventDefault();
};

function submitAPopupFormNewPlace(evt) {
  const card = new Card({name: namePlaceFormPopup.value, link: placeSourceFormPopup.value}, selectors.template);
  const cardElement = card.generateCard();
  document.querySelector(selectors.elementsCard).prepend(cardElement);
  
  startedValidityFormNewPlace(popupFormAdd);
  closePopup(popupFormAdd);
  evt.preventDefault();
  popupFormPlace.reset();
};

function startedValidityFormNewPlace(popup) {
  const buttonElement = popup.querySelector(validationConfig.submitButtonSelector);
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.remove(validationConfig.buttonWithFormValidity);
};

function startedValidityFormProfile(popup) {
  const buttonElement = popup.querySelector(validationConfig.submitButtonSelector);
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.add(validationConfig.buttonWithFormValidity);
  startedValidationInput(popup);
};

function startedValidationInput(popup) {
  const inputList = Array.from(popup.querySelectorAll(validationConfig.inputSelector));

  inputList.forEach((inputElement) => {
    if (inputElement.validity.valid) {
      inputElement.classList.remove(validationConfig.inputErrorClass);
      inputElement.classList.add(validationConfig.inputValidity);
      popup.querySelector(`.${inputElement.name}_error`);
    } else if (popup.querySelector(`.${inputElement.name}_error`)) {
      inputElement.classList.add(validationConfig.inputErrorClass);
      inputElement.classList.remove(validationConfig.inputValidity);
    } else {
      inputElement.classList.remove(validationConfig.inputErrorClass);
      inputElement.classList.add(validationConfig.inputValidity);
    }
  });
}

initialCards.forEach((item) => {
  const card = new Card(item, selectors.template);
  const cardElement = card.generateCard();

  document.querySelector(selectors.elementsCard).prepend(cardElement);
});

const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
formList.forEach((formElement) => {
  const liveValidation = new FormValidator(validationConfig, formElement);
  liveValidation.enableValidation();
});

popupFormProfile.addEventListener('click', closedPopupByClickOnOverlay);
popupFormAdd.addEventListener('click', closedPopupByClickOnOverlay);
popupOpenPicture.addEventListener('click', closedPopupByClickOnOverlay);

infoButtonProfile.addEventListener('click', () => {
  openProfilePopup();
  startedValidityFormProfile(popupFormProfile);
});

addButtonProfile.addEventListener('click',() => {
  openPopup(popupFormAdd);
  startedValidationInput(popupFormAdd);
});

buttonClosePopupFormProfile.addEventListener('click', () => closePopup(popupFormProfile));
buttonClosePopupFormNewPlace.addEventListener('click', () => closePopup(popupFormAdd));
buttonClosePopupOpenPicture .addEventListener('click', () => closePopup(popupOpenPicture));
popupFormName.addEventListener('submit', submitAPopupProfileForm);
popupFormPlace.addEventListener('submit', submitAPopupFormNewPlace);
