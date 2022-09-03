import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormForPopup) {
    super(popupSelector);
    this._submitFormForPopup = submitFormForPopup;

    this.form = this._popup.querySelectorAll('.popup__form');
    this._inputList = this.form.querySelectorAll('.popup__input');
  }

  // закрытие поп-апа
  close() {
    super.close();
    this.form.reset();
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  // возвращает текст с inputs
  getInputValues() {
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  //слушатели
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', this._submitFormForPopup);
  }
}
