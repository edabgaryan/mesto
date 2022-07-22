const selectors = {
    //Popup
    popupFormProfile: '.popup__form-profile',
    popupFormAdd: '.popup__form-add',
    popupOpenPicture: '.popup__open-picture',
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
    infoButtonPopup: '.profile__info-button',
    addButtonPopup: '.profile__add-button',
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
const infoButtonPopup = document.querySelector(selectors.infoButtonPopup); //
const addButtonPopup = document.querySelector(selectors.addButtonPopup);//
//Card
const template = document.querySelector(selectors.template).content;
const elementItem = template.querySelector(selectors.card);
const elementsCard = document.querySelector(selectors.elementsCard);

//Function Открытия Попапа
function popupOpane (popup) {
    popup.classList.add('popup_opened');
};
//Function Закрытия Попапа
function popupClose (popup) {
    popup.classList.remove('popup_opened');
}
//Меняем текст имени автора
function openProfilePopup () {
    fullNameForm.value = fullNameProfile.textContent;
    professionForm.value = professionProfile.textContent;
    popupOpane(popupFormProfile);
}
function formSubmitName (evt) {
    evt.preventDefault();
    fullNameProfile.textContent = fullNameForm.value;
    professionProfile.textContent = professionForm.value;
    popupClose(popupFormProfile);
}
function formSubmitPlace (evt) {
    evt.preventDefault();
    renderCard({name: namePlaceFormPopup.value, link: placeSourceFormPopup.value });
    popupClose(popupFormAdd);

    namePlaceFormPopup.value = '';
    placeSourceFormPopup.value = '';
};
//

infoButtonPopup.addEventListener('click', () => openProfilePopup());
addButtonPopup.addEventListener('click',() => popupOpane(popupFormAdd));
buttonClosePopupFormProfile.addEventListener('click', () => popupClose(popupFormProfile));
buttonClosePopupFormNewPlace.addEventListener('click', () => popupClose(popupFormAdd));
buttonClosePopupOpenPicture.addEventListener('click', () => popupClose(popupOpenPicture));

popupFormName.addEventListener('submit', formSubmitName);
popupFormPlace.addEventListener('submit', formSubmitPlace);


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
        popupOpane(popupOpenPicture);
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
