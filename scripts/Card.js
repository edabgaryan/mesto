export class Card {
  constructor(obj, cardSelector, openImagePopup, selectors) {
    this._name = obj.name;
    this._link = obj.link;
    this._cardSelector = cardSelector;
    this._openImagePopup = openImagePopup;
    this._card = selectors.card;
    this._trashButton = selectors.trashButton;
    this._cardButtonLike = selectors.cardButtonLike;
    this._cardImage = selectors.cardImage;
    this._cardTitle = selectors.cardTitle;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardTitle = this._element.querySelector(this._cardTitle);

    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;

    return this._element;
  }

  _getTemplate() {
    const elementCopy = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(this._card)
    .cloneNode(true);

    return elementCopy;
  }

  _setEventListeners() {
    this._trashButton = this._element.querySelector(this._trashButton);
    this._cardButtonLike = this._element.querySelector(this._cardButtonLike);
    this._cardImage = this._element.querySelector(this._cardImage);
    
    this._trashButton.addEventListener('click', () => {
      this._removeCardClick();
    });

    this._cardButtonLike.addEventListener('click', () => {
      this._buttonCardLike();
    });

    this._cardImage.addEventListener('click', () => {
      this._openImagePopup(this._name, this._link);
    });
  }

  _removeCardClick() {
    this._element.remove();
    this._element = null;
  }

  _buttonCardLike() {
    this._cardButtonLike.classList.toggle('card__like_active');
  }
};
