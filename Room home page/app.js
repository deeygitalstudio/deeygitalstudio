const btn1EL = document.getElementById("btn1")
const btn2EL = document.getElementById("btn2")
const btn3EL = document.getElementById("btn3")
const btn4EL = document.getElementById("btn4")
const layer2EL = document.querySelector(".layer2")
const layer3EL = document.querySelector(".layer3")
const layer1EL = document.querySelector(".layer1")
const backgEL = document.querySelector(".backg")




// function changeBg(){

//     backgEL.style.backgroundImage = "url(./images/desktop-image-hero-2.jpg)";
//     layer2EL.style.display = "block";
//     layer1EL.style.display = "none";
//     layer3EL.style.display = "none";

 
//   }

// function changeBg1(){

//     backgEL.style.backgroundImage = "url(./images/desktop-image-hero-1.jpg)";
//     layer2EL.style.display = "none";
//     layer1EL.style.display = "block";
//     layer3EL.style.display = "none";

 
//   }



var i = 0;
var texts = [layer1EL, layer2EL, layer3EL];
var images = []; //array

//images


images[0] = "url(./images/desktop-image-hero-2.jpg)";
images[1] = "url(./images/desktop-image-hero-3.jpg)";


function changeBg1() {
    backgEL.style.backgroundImage = images[i];
    texts;

    if (i < images.length - 1) {
        i++;
        layer3EL.style.display = 'none';
        layer1EL.style.display = 'none';
        layer2EL.style.display = 'block';
    } else{
        i = 0;
        layer1EL.style.display = 'none';
        layer2EL.style.display = 'none';
        layer3EL.style.display = 'block';
    }
  
}




btn1EL.addEventListener('click', changeBg1)
btn2EL.addEventListener('click', changeBg1)
btn3EL.addEventListener('click', changeBg1)
btn4EL.addEventListener('click', changeBg1)