const charecterElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");

document.addEventListener("keyup", (e) => {
    if (e.key === ' ') {
        charecterElement.classList.add("jupmAnimate");

        setTimeout(() => {
            charecterElement.classList.remove("jumpAnimate");  
        },500);
    }
});