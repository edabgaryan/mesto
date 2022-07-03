import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._title = this._popup.querySelector(".popup__picture");
    this._image = this._popup.querySelector(".popup__figcaption");
  }

  open({ title, imageUrl }) {
    this._imageElement.src = imageUrl;
    this._imageElement.alt = title;
    this._captionElement.textContent = title; 

    super.open();
  }
}