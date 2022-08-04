const selectors = {
    //Popup
    popupFormProfile: '.popup_form_profile',
    popupFormAdd: '.popup_form_add',
    popupOpenPicture: '.popup_open_picture',
    closeButtonPopup: '.popup__close',
    popupFormName: '.popup__form-name',
    popupFormPlace: '.popup__form-place',
    fullNameForm: '.popup__input_form_name',
    professionForm: '.popup__input_form_profession',
    popupPicture: '.popup__picture',
    popupFigcaption: '.popup__figcaption',
    namePlaceFormPopup: '.popup__input_form_name-place',
    placeSourceFormPopup: '.popup__input_form_source-on-place',
    //Profile
    infoButtonProfile: '.profile__info-button',
    addButtonProfile: '.profile__add-button',
    fullNameProfile: '.profile__title',
    professionProfile: '.profile__paragraph',
    //Card
    elementsCard: '.elements__cards',
    card: '.card',
    template: '.template',
    trashButton: '.card__button-delete',
    cardButtonLike: '.card__like',
    cardImage: '.card__image',
    cardTitle: '.card__title',

}
//Popup
const popupFormProfile = document.querySelector(selectors.popupFormProfile); // 1-ый ПОПАП
const popupFormAdd = document.querySelector(selectors.popupFormAdd);    // 2-ой ПОПАП
const popupOpenPicture = document.querySelector(selectors.popupOpenPicture); // 3-ый ПОПАП

const fullNameForm = document.querySelector(selectors.fullNameForm);//
const professionForm = document.querySelector(selectors.professionForm);//
const popupFormName = document.querySelector(selectors.popupFormName);//
const popupFormPlace = document.querySelector(selectors.popupFormPlace);
const popupPicture = document.querySelector(selectors.popupPicture);
const popupFigcaption = document.querySelector(selectors.popupFigcaption);

const buttonClosePopupFormProfile = popupFormProfile.querySelector(selectors.closeButtonPopup);//
const buttonClosePopupFormNewPlace = popupFormAdd.querySelector(selectors.closeButtonPopup);//
const buttonClosePopupOpenPicture = popupOpenPicture.querySelector(selectors.closeButtonPopup);//

const namePlaceFormPopup = document.querySelector(selectors.namePlaceFormPopup);
const placeSourceFormPopup = document.querySelector(selectors.placeSourceFormPopup);
// Profile
const fullNameProfile = document.querySelector(selectors.fullNameProfile);//
const professionProfile = document.querySelector(selectors.professionProfile);
const infoButtonProfile = document.querySelector(selectors.infoButtonProfile); //
const addButtonProfile = document.querySelector(selectors.addButtonProfile);//
//Card
const templateCard = document.querySelector(selectors.template).content;
const elementItem = templateCard.querySelector(selectors.card);
const elementsCard = document.querySelector(selectors.elementsCard);

//Function Открытия Попапа
function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
};
//Function Закрытия по escape
function keyHandler(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};
//Function Закрытия Попапа
function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
}
//Меняем текст имени автора
function openProfilePopup () {
    fullNameForm.value = fullNameProfile.textContent;
    professionForm.value = professionProfile.textContent;
    openPopup(popupFormProfile);
}
function submitFormName (evt) {
    evt.preventDefault();
    fullNameProfile.textContent = fullNameForm.value;
    professionProfile.textContent = professionForm.value;
    closePopup(popupFormProfile);
}
//Fucntiom конпоки сохр
function submitFormPlace () {
    renderCard({name: namePlaceFormPopup.value, link: placeSourceFormPopup.value});
    closePopup(popupFormAdd);
    popupFormPlace.reset();
};
// Function закрытия по клику вне Popupa
function closePopupByOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
    };
}
//Подключил validate
infoButtonProfile.addEventListener('click', () => {
    openProfilePopup();
    startedValidationForm(popupFormProfile);
});

addButtonProfile.addEventListener('click',() => {
    openPopup(popupFormAdd);
    startedValidationForm(popupFormAdd);
});
//
//
infoButtonProfile.addEventListener('click', () => openProfilePopup());
addButtonProfile.addEventListener('click',() => openPopup(popupFormAdd));
buttonClosePopupFormProfile.addEventListener('click', () => closePopup(popupFormProfile));
buttonClosePopupFormNewPlace.addEventListener('click', () => closePopup(popupFormAdd));
//
popupFormProfile.addEventListener('click', closePopupByOverlayClick);
popupFormAdd.addEventListener('click', closePopupByOverlayClick);
popupOpenPicture.addEventListener('click', closePopupByOverlayClick);
//
popupFormName.addEventListener('submit', submitFormName);
popupFormPlace.addEventListener('submit', submitFormPlace);


function createCard({name, link}) {
    const elementCopy = elementItem.cloneNode(true); //////// elementItem
    const cardImage = elementCopy.querySelector(selectors.cardImage);
    const cardButtonLike = elementCopy.querySelector(selectors.cardButtonLike);

    elementCopy.querySelector(selectors.cardTitle).textContent = name;
    cardImage.alt = name;
    cardImage.src = link;
    //Кнопка like    
    cardButtonLike.addEventListener('click', function() {
        cardButtonLike.classList.toggle('card__like_active');
    });
    //Кнопка "trash
    elementCopy.querySelector(selectors.trashButton).addEventListener('click', function() {
        elementCopy.remove();
    });
    // Меняем данные 
    cardImage.addEventListener('click', function() {
        popupPicture.alt = name;
        popupPicture.src = link;
        popupFigcaption.textContent = name;
        openPopup(popupOpenPicture);
    });
    return elementCopy;
};
function renderCard(card) {
    elementsCard.prepend(createCard(card));
};
function createInitialCards() {
    initialCards.forEach(renderCard);
};
createInitialCards();
