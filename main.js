///ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");

//REASTART PAGE ELEMENTs
const restarPage = document.querySelector('.restart-page');
const restarButton = document.querySelector('.restart-btn');

///JUMP TREX CHARECTER WHEN WE CLICK SPAse BUTTON
document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
      trexElement.classList.add("jumpAnimate");
  
      setTimeout(() => {
        trexElement.classList.remove("jumpAnimate");
      }, 500);
    }
  });

  //مامیخواهیم فانکشنی هرده میلی ثانیه اجرابشه
  const checkCondition = () =>{
    const trexTop = parseInt(window.getComputedStyle(trexElement).top);
    const treeLeft = parseInt(window.getComputedStyle(treeElement).left);

    if(treeLeft < 90 && trexTop >= 230){
    trexElement.style.top = `$(trexTop)px`;
    treeElement.style.display = 'none';
    restarPage.classList.add('show-restart-page');
    }
  };
  setInterval(checkCondition, 10);