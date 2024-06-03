document.addEventListener("DOMContentLoaded", function () {
let good = document.getElementById("7");
let bad = document.getElementById("27");
let text7 = document.getElementById("gametext7");
let text27 = document.getElementById("gametext27");
good.addEventListener("click", function() {
    text7.style.display = "block";
    text27.style.display="none";
})
bad.addEventListener("click", function() {
    text27.style.display = "block";
    text7.style.display = "none";
})
});