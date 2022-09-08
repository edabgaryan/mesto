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

const popupAddCard = new PopupWithForm (
  selectors.popupFormAdd, {
  submitForm: (data) => {
    const {'popup__input-text_name-place': name, 'popup__input-text_source-on-place': link} = data;
    sectionCards.addItem(createCard({name, link}));
    popupAddCard.close();
  }
}, selectors);

popupAddCard.setEventListeners();

const userInfo = new UserInfo (selectors.fullNameProfile, selectors.professionProfile);

const profileForm = new PopupWithForm (
  selectors.popupFormProfile, {
  submitForm: (data) => {
    const {'popup__input-text_fullname': name, 'popup__input-text_profession': info} = data;
    userInfo.setUserInfo({name, info});
    profileForm.close();
  }
}, selectors);

profileForm.setEventListeners();

const profileValidation = new FormValidator(popupFormName);
const newCardValidation = new FormValidator(popupFormPlace);
profileValidation.enableValidation();
newCardValidation.enableValidation();

infoButtonProfile.addEventListener('click', () => {
  const {name, info} = userInfo.getUserInfo();
  fullNameForm.value = name;
  professionForm.value = info;
  profileValidation.resetValidation();
  profileForm.open();
});

addButtonProfile.addEventListener('click',() => {
  popupAddCard.open();
  popupFormPlace.reset();
  newCardValidation.resetValidation();
});
