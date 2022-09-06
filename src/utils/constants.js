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
    elementsContainer: ".elements__cards",
    card: ".card",
    template: ".template",
    trashButton: ".card__button-delete",
    cardButtonLike: ".card__like",
    cardImage: ".card__image",
    cardTitle: ".card__title",
    popupForm: '.popup__form',
    formInput: '.popup__input',
  };

export const infoButtonProfile = document.querySelector(selectors.infoButtonProfile);
export const addButtonProfile = document.querySelector(selectors.addButtonProfile);
export const popupFormName = document.querySelector(selectors.popupFormName);
export const popupFormPlace = document.querySelector(selectors.popupFormPlace);
export const fullNameForm = document.querySelector(selectors.fullNameForm);
export const professionForm = document.querySelector(selectors.professionForm);
export const elementsContainer = document.querySelector(selectors.elementsContainer);
