export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const classPopupOpened = 'popup_opened';
export const closeButtonPopup = '.popup__close';

export const form = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-btn',
    activeButtonClass: 'ppopup__input_border-bottom_black',
    inactiveButtonClass: 'popup__form-btn_disabled',
    buttonClass: 'popup__form-btn_hover',
    errorSelector: '.popup__input-text_error-visible',
  };
  
  // для поиска на странице
  const page = document.querySelector('.page');
  
  const profile = page.querySelector('.profile');
  const profileInfo = profile.querySelector('.profile__info');
  // all buttons in profile
  export const profileEditButton = profileInfo.querySelector('.profile__info-button');
  export const profileAddNewCardButton = profile.querySelector('.profile__add-button');
  
  export const popupEditForm = page.querySelector('.popup__form-name');
  export const popupAddForm = page.querySelector('.popup__form-place');
