//Typing functions
const WordsEl = document.querySelector(".words");
const cursor = document.querySelector(".cursor");

const wordArray = ["Frontend Developer.", "UI UX Designer.", "Photography and Video Editor.", "Motion Graphics Artist.", "Instructor."];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 50;
const erasingDelay = 100;
const newWordDelay = 2000;

// Typing Function
function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }

    WordsEl.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newWordDelay);
  }
}

// Erase Function
function erase() {
  if (letterIndex > 0) {
    if (!cursor.classList.contains("typing")) {
      cursor.classList.add("typing");
    }
    WordsEl.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});

//end of typing function


//scroll function

$(document).ready(function(){
    $('.logos').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });
})



//end of scroll functio

//backgroung image


var i = 0;
var images = []; //array
var time = 6000; // time in millie seconds

//images

images[0] = "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(image/1 (2).jpg)";
images[1] = "linear-gradient(rgba(0, 0,  0, 0.7),rgba(0, 0, 0, 0.7)), url(./Image/2)";
images[2] = "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(./image/3)";
images[3] = "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(image/54.jpg)";
//function

function changeImage() {
    const bimage = document.querySelector('.bimage')
    bimage.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = -1;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;



//form function

const scriptURL = 'https://script.google.com/macros/s/AKfycbyCnPcp7Ywfel2fx89DYNtXQEO0O0MPqKXUm27nH8hE43Zi_Mad19AfMZis2bpy3iE4/exec'
const form = document.forms['submit-to-google-sheet']
const errorEl = document.getElementById("error")
const btnEl = document.getElementById("btn")
const inputEl = document.querySelectorAll('.form-control')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { errorEl.innerHTML = "Thank you, We have recieved your message";})
    .catch(error => console.error('Error!', error.message))

   setTimeout(function(){
      errorEl.innerHTML = "";

   },7000)
   form.reset()

})

const scriptURL1 = 'https://script.google.com/macros/s/AKfycbzRlNmZO4a_YqmMMGFggDb5dGPxRXTLWxoI-NIXVuidnJtb0Ob3xnN7sHxkj13U16weiQ/exec'
const form1 = document.forms['submit-to-google-sheets']
const error1El = document.getElementById("error1")
const btn1El = document.getElementById("btn1")
const input1El = document.querySelectorAll('.inp')

form1.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
    .then(response => { error1El.innerHTML = "Thank you, We have recieved your message";})
    .catch(error => console.error('Error!', error.message))

   setTimeout(function(){
      error1El.innerHTML = "";

   },7000)
   form1.reset()

})


const clickEl = document.querySelector('.click')
const click1El = document.querySelector('.click1')
const form1El = document.querySelector('.form1')
const form2El = document.querySelector('.form2')
const imgEl = document.querySelector('.img')
const img1El = document.querySelector('.img1')

clickEl.addEventListener('click', () => {
    form1El.style.display = 'none';
    form2El.style.display = 'block';
    imgEl.style.display = 'none';
    img1El.style.display = 'block';
   
})


click1El.addEventListener('click', () => {
    form1El.style.display = 'block';
    form2El.style.display = 'none';
    imgEl.style.display = 'block';
    img1El.style.display = 'none';
   

    
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
})


const readEl = document.getElementById("read");
function showText() {
  var dotsEl = document.getElementById("dots");
  var moreTextEl = document.getElementById("more");
  var abtEl = document.getElementById("abt");


  if (dotsEl.style.display === "none") {
    dotsEl.style.display = "inline";
    readEl.innerHTML = "Read more";
    moreTextEl.style.display = "none";
    abtEl.style.display = "block";
  } else {
    dotsEl.style.display = "none";
    readEl.innerHTML = "Read less";
    moreTextEl.style.display = "inline";
    abtEl.style.display = "none";
  }
}

readEl.addEventListener("click", showText)
