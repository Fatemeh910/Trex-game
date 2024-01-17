///ELEMENTS
const trexElement = document.querySelector(".charecter");
const treeElement = document.querySelector(".block");

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
  };
  setInterval(() => {
    
  }, interval);