import './index.css';

import {
  selectors,
  infoButtonProfile,
  addButtonProfile,
  popupFormName,
  popupFormPlace,
  fullNameForm,
  professionForm,
  elementsContainer,
  initialCards
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupWithImage = new PopupWithImage (selectors.popupOpenPicture, selectors);
popupWithImage.setEventListeners();

function createCard(cardItem) {
  const card = new Card(
    cardItem, 
    selectors.template, {
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }
  }, selectors);
  return card.generateCard();
};

const sectionCards = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    sectionCards.addItem(createCard(cardItem));
  }
}, elementsContainer);

sectionCards.renderItems();

const newCard = new PopupWithForm (
  selectors.popupFormAdd, {
  submitForm: (data) => {
    const {'popup__input_form_name-place"': name, 'popup__input_form_source-on-place': link} = data;
    sectionCards.addItem(createCard({name, link}));
    newCard.close();
  }
}, selectors);

newCard.setEventListeners();

const user = new UserInfo (selectors.fullNameProfile, selectors.professionProfile);

const profileForm = new PopupWithForm (
  selectors.popupFormProfile, {
  submitForm: (data) => {
    const {'popup__input_form_name': name, 'popup__input_form_profession': info} = data;
    user.setUserInfo({name, info});
    profileForm.close();
  }
}, selectors);

profileForm.setEventListeners();

const profileValidation = new FormValidator(popupFormName);
const newCardValidation = new FormValidator(popupFormPlace);
profileValidation.enableValidation();
newCardValidation.enableValidation();

infoButtonProfile.addEventListener('click', () => {
  const {name, info} = user.getUserInfo();
  fullNameForm.value = name;
  professionForm.value = info;
  profileValidation.resetValidation();
  profileForm.open();
});

addButtonProfile.addEventListener('click',() => {
  newCard.open();
  popupFormPlace.reset();
  newCardValidation.resetValidation();
});
