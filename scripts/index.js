import { Card } from './Card.js';
import { initialCards } from './places.js';
import { FormValidator} from './FormValidator.js';

const selectors = {
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
const popupOpenPicture = document.querySelector(selectors.popupOpenPicture); // 3-ый ПОПАП

const fullNameForm = document.querySelector(selectors.fullNameForm); //
const professionForm = document.querySelector(selectors.professionForm); //
const popupFormName = document.querySelector(selectors.popupFormName); //
const popupFormPlace = document.querySelector(selectors.popupFormPlace);
const elementsCard = document.querySelector(selectors.elementsCard);//

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
function openPopup(popup) {
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
function openImagePopup(name, link) {
  document.querySelector(selectors.picturePopup).src = link;
  document.querySelector(selectors.picturePopup).alt = name;
  document.querySelector(selectors.figcaptionPopup).textContent = name;
  openPopup(popupContainerOpenPicture); 
};

function submitAPopupProfileForm(evt) {
  fullNameProfile.textContent = fullNameForm.value;
  professionProfile.textContent = professionForm.value;
  closePopup(popupFormProfile);
  evt.preventDefault();
};
//создание карточки
function createCard(obj) {
  const card = new Card(obj, selectors.template, openImagePopup, selectors);
  return card.generateCard();
};

function submitAPopupFormNewPlace(evt) {
  elementsCard.prepend(createCard({name: namePlaceFormPopup.value, link: placeSourceFormPopup.value}));
  closePopup(popupFormAdd);
  evt.preventDefault();
};
initialCards.forEach((item) => {
  elementsCard.prepend(createCard(item));
});
const profileValidation = new FormValidator(popupFormName);
const newCardValidation = new FormValidator(popupFormPlace);
profileValidation.enableValidation();
newCardValidation.enableValidation();

popupFormProfile.addEventListener('click', closedPopupByClickOnOverlay);
popupFormAdd.addEventListener('click', closedPopupByClickOnOverlay);
popupOpenPicture.addEventListener('click', closedPopupByClickOnOverlay);

infoButtonProfile.addEventListener('click', () => {
  openProfilePopup();
  profileValidation.resetValidation();
});

addButtonProfile.addEventListener('click',() => {
  openPopup(popupFormAdd);
  popupFormPlace.reset();
  newCardValidation.resetValidation();
});

buttonClosePopupFormProfile.addEventListener('click', () => closePopup(popupFormProfile));
buttonClosePopupFormNewPlace.addEventListener('click', () => closePopup(popupFormAdd));
buttonClosePopupOpenPicture .addEventListener('click', () => closePopup(popupOpenPicture));
popupFormName.addEventListener('submit', submitAPopupProfileForm);
popupFormPlace.addEventListener('submit', submitAPopupFormNewPlace);
