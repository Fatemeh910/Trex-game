const charecterElement = document.querySelector(".charecter");
const threeElement = document.querySelector(".block");

document.addEventListener('keyup',(e) => {
if (e.key === " ") {
 charecterElement.classList.add("jupmAnimate");
}
});