import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithForm  from '../components/PopupWithForm.js';
import PopupWithImage  from '../components/PopupWithImage.js';
import Section  from '../components/Section.js';
import UserInfo from '../components/UserInfo.js'

import {
  initialCards, form,profileEditButton, profileAddNewCardButton,popupEditForm, popupAddForm,} from '../utils/constants.js';

const user = new UserInfo({
  name: '.profile__title',
  info: '.profile__paragraph',
});

const popupProfileEdit = new PopupWithForm('.popup_form_profile', submitFormForPopupEdit);
const objEditForm = new FormValidator(form, popupEditForm);
const popupCardAdd = new PopupWithForm('.popup_form_add', submitFormForPopupAdd);
const objAddForm = new FormValidator(form, popupAddForm);
const popupWithImage = new PopupWithImage('.popup_open_picture');
const cardListSection = '.elements__cards';

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const newCard = createCard(cardItem);
      cardList.addItem(newCard);
    },
  },
  cardListSection
);

popupProfileEdit.setEventListeners();
popupCardAdd.setEventListeners();
popupWithImage.setEventListeners();


function submitFormForPopupEdit() {
  user.setUserInfo(popupProfileEdit.getInputValues());
  popupProfileEdit.close();
}
function submitFormForPopupAdd(evt) {
  evt.preventDefault();
  const card = popupCardAdd.getInputValues();
  const newCard = createCard(card);
  cardList.addItem(newCard);
  popupCardAdd.close();
}

function createCard(item) {
  const cardElement = new Card('#template-сard', item, () => {
    popupWithImage.open(item.link, item.name);
  });
  return cardElement.generateCard();
}

profileEditButton.addEventListener('click', () => {
  popupProfileEdit.setInputValues(user.getUserInfo());
  objEditForm.resetValidation();
  popupProfileEdit.open();
});

profileAddNewCardButton.addEventListener('click', () => {
  objAddForm.resetValidation();
  popupCardAdd.open();
});

objEditForm.enableValidation();
objAddForm.enableValidation();

cardList.renderItems();
