const hamburgerMenuContainerTag = document.querySelector('.hamburgerMenuContainer');
const hamburgerTag = document.querySelector('.hamburger');

const overlayMenuTag = document.querySelector('.overlayMenu');
const hambugerline1Tag = document.querySelector('.line1');
const hambugerline2Tag = document.querySelector('.line2');
const hambugerline3Tag = document.querySelector('.line3');
const Litag = document.getElementsByTagName("li")

hamburgerMenuContainerTag.addEventListener("click" , ()=>{
   if(hamburgerMenuContainerTag.classList.contains("isOpened")){
    overlayMenuTag.classList.remove("showoverlay")
    hambugerline2Tag.classList.remove("hideline2")
    hambugerline1Tag.classList.remove("rotateline2")
    hambugerline3Tag.classList.remove("rotateline3")
    hamburgerMenuContainerTag.classList.remove("isOpened")
    for(let i=0 ; i < Litag.length;i++){
        Litag[i].classList.remove("moveLiTag")
    }
   }else{
    overlayMenuTag.classList.add("showoverlay")
    hambugerline2Tag.classList.add("hideline2")
    hambugerline1Tag.classList.add("rotateline2")
    hambugerline3Tag.classList.add("rotateline3")
    hamburgerMenuContainerTag.classList.add("isOpened")
    for(let i=0;i < Litag.length;i++){
        Litag[i].classList.add("moveLiTag")
    }
   }
  
})