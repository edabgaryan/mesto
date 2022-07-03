export class Card {
  constructor(templateSelector, item, handleCardClick){
    this._templateSelector = templateSelector;
    this._title = item.name;
    this._image = item.link;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._buttonTrash = this._element.querySelector('.card__button-delete');
    this._buttonImage = this._element.querySelector('.card__image');
    this._buttonLike = this._element.querySelector('.card__like');
  }

  // поиск template
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
    .content
    .cloneNode(true);
    return cardElement;    
  }

  // создание карточки
  generateCard() {
    this._setEventListeners();
    const elementCardImage = this._element.querySelector('.card__image');
    elementCardImage.src = this._image;
    elementCardImage.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }
  
  // слушатели на кнопки
  _setEventListeners() {
  
    // слушатель на кнопку удаления
    this._buttonTrash.addEventListener('click', () => {
      this.removeCard();
    });

    // слушатель на кнопку-картинку
    this._buttonImage.addEventListener('click', () => {
      this._handleCardClick();
    });

    // слушатель на кнопку лайка
    this._buttonLike.addEventListener('click', () => {
      this.changeLike();
    });
  };
  
  // смена вида лайка
  changeLike() {
    this._buttonLike.classList.toggle('card__like_active');
  }

  // удаление карточки
  removeCard() {
    const item = this._buttonTrash.closest('.elements__cards');
    item.remove();
    this._element = null;
  }
}