import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, {submitForm}, selectors) {
    super(selectorPopup, selectors);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(selectors.popupForm); ////All ?
    this._inputArray = this._popup.querySelectorAll(selectors.formInput);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  _getInputValues() {
    this._inputsValue = {};
    this._inputArray.forEach(item => {
      this._inputsValue[item.name] = item.value;
    });
    return this._inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
}