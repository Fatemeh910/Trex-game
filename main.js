const charectorElement = document.querySelector(".charecter");
const threeElement = document.querySelector(".block");

document.addEventListener('keyup',(e)=>{
if(e.key === ' '){
charectorElement.classList.add("jupmAnimate");
}
});