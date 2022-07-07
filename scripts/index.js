let userName = "Жак-Ив Кусто"
let userAbout = "Исследователь океана"
document.querySelector(".profile__info-paragraph").innerHTML = userAbout
function aboutinputOnchange() {
    userAbout = document.querySelector(".profile__info-paragraph").value;
}
document.querySelector(".profile__info-title").innerHTML = userName 
function inputOnchange() {
    userName = document.querySelector(".profile__info-title").value;
}
const savebtn = document.querySelector(".popup__form-btn");
const modal = document.querySelector(".popup");
const btn = document.querySelector(".profile__edit-button");
const span = document.querySelector(".popup__close");


btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

savebtn.onclick = function() {
    modal.style.display = "none";
    document.querySelector(".profile__info-title").innerHTML = userName 
    document.querySelector(".profile__info-paragraph").innerHTML = userAbout
}
input = document.querySelector(".popup__form-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
    event.preventDefault();
    document.querySelector(".popup__form-btn").click();
    }
    })
input = document.querySelector(".popup__form-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".popup__form-btn").click();
    }
    });
