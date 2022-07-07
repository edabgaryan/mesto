
let userName = "Жак-Ив Кусто"
let userAbout = "Исследователь океана"
document.getElementById("userAbout").innerHTML = userAbout
function aboutinputOnchange() {
    userAbout = document.getElementById("userAbout-input").value;
}
document.getElementById("userName").innerHTML = userName 
function inputOnchange() {
    userName = document.getElementById("userName-input").value;
}
const savebtn = document.getElementById("savebtn");
const modal = document.getElementById("myPopup");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("popup__close")[0];
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
    document.getElementById("userName").innerHTML = userName 
    document.getElementById("userAbout").innerHTML = userAbout
}
input = document.getElementById("userName-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
    event.preventDefault();
    document.getElementById("savebtn").click();
    }
    })
input = document.getElementById("userAbout-input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("savebtn").click();
    }
    });
function like (itemId) {
    const likeBtn = document.getElementById(`likebtn${itemId}`);
    if (likeBtn) {
        likeBtn.classList.add("card__like-active"); 
    }
}
