///ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");

//REASTART PAGE ELEMENTs
const restartPage = document.querySelector('.restart-page');
const restartButton = document.querySelector('.restart-btn');

///JUMP TREX CHARECTER WHEN WE CLICK SPAse BUTTON
document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
      trexElement.classList.add("jumpAnimate");
  
      setTimeout(() => {
        trexElement.classList.remove("jumpAnimate");
      }, 500);
    }
  });

  //چک کن ایا ماباختیم یانه
  const checkCondition = () => {
    const trexTop = parseInt(window.getComputedStyle(trexElement).top);
    const treeLeft = parseInt(window.getComputedStyle(treeElement).left);
  
    if (treeLeft < 90 && trexTop >= 230) {
      trexElement.style.top = `${trexTop}px`;
      treeElement.style.display = "none";
      restartPage.classList.add("show-restart-page");
      clearInterval(tirexInterval);
    }
  };
//فانکشن چک کالدیز رو هرده ثانیه فراخوانی کن
const tirexInterval = setInterval(checkCondition, 10);

  ///بازس ری استارت شودزمانی که رودکمه ری استارت کلیک کنیم
  restartButton.addEventListener("click", () => {
    restartPage.classList.remove("show-restart-page");
    trexElement.style.top = "";
    treeElement.style.display = "block";
    setInterval(checkCondition, 10);
  });