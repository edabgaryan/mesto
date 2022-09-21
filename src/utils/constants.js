export const selectors = {
    //Popup
    popupContainerFormProfile: ".popup_form_profile",
    popupContainerFormNewPlace: ".popup_form_add",
    popupContainerOpenPicture: ".popup_open_picture",
    popupContainerDeletePicture: ".popup_delete-picture",
    buttonClosePopup: ".popup__close",
    nameProfileFormPopup: ".popup__form-name", 
    newPlaceFormPopup: ".popup__form-place",
    avatarFormProfile: ".popup__form_avatar",
    buttonSave: '.popup__form-btn',
    popupAvatar: ".popup_edit-avatar",
    fullNameForm: ".popup__input_form_name",
    professionForm: ".popup__input_form_profession",
    popupPicture: ".popup__picture",
    popupFigcaption: ".popup__figcaption",
    namePlaceFormPopup: ".popup__input_form_name-place",
    placeSourceFormPopup: ".popup__input_form_source-on-place",
    //Profile
    buttonEditProfile: ".profile__info-button",
    buttonAddPlace: ".profile__add-button",
    fullNameProfile: ".profile__title",
    professionProfile: ".profile__paragraph",
    avatarProfile: ".profile__ahutor",
    //Card
    elementsContainer: ".elements__cards",
    card: ".card",
    templateCard: ".template",
    buttonDeleteCard: ".card__button-delete",
    buttonCardLike: ".card__like",
    cardImage: ".card__image",
    cardTitle: ".card__title",
    popupForm: '.popup__form',
    formInput: '.popup__input',
  };

export const buttonEditProfile = document.querySelector(selectors.buttonEditProfile);
export const buttonAddPlace = document.querySelector(selectors.buttonAddPlace);
export const editAvatarProfile = document.querySelector(selectors.avatarProfile);

export const nameProfileFormPopup = document.querySelector(selectors.nameProfileFormPopup);
export const newPlaceFormPopup = document.querySelector(selectors.newPlaceFormPopup);
export const avatarFormPopup = document.querySelector(selectors.avatarFormProfile);

export const fullNameInputFormPopup = document.querySelector(selectors.fullNameForm);
export const professionInputFormPopup = document.querySelector(selectors.professionForm);

export const elementsContainer = document.querySelector(selectors.elementsContainer);
