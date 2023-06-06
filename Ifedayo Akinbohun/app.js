const WordsEl = document.querySelector(".words");
const cursor = document.querySelector(".cursor");
const icon = document.querySelector(".fixed-icon");
const dots1El = document.querySelector(".dots1");
const rrEl = document.querySelector(".rr");
const chiEl = document.querySelector(".chi");
const rr2El = document.querySelector(".rr2");
const rr3El = document.querySelector(".rr3");
const rr4El = document.querySelector(".rr4");
const rr5El = document.querySelector(".rr5");
const rr6El = document.querySelector(".rr6");
const navbarEl = document.querySelector(".navbar");
const dots2El = document.querySelector(".dots2");
const dots3El = document.querySelector(".dots3");
const dots4El = document.querySelector(".dots4");
const dots5El = document.querySelector(".dots5");
const dots6El = document.querySelector(".dots6");

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



function downloadFile() {
    // Create a temporary element
    var link = document.createElement('a');
    link.href = './images/Akinbohun-Ifedayo.pdf';  // Replace with the actual file URL
    link.download = 'Akinbohun ifedayo.pdf';   // Replace with the desired file name

    // Append the element to the body
    document.body.appendChild(link);

    // Trigger the click event on the element
    link.click();

    // Remove the element from the body
    document.body.removeChild(link);
  }


  $(document).ready(function(){
    $('.logos').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 7
              }
            },
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

icon.addEventListener('click', openModal)

function openModal() {
    document.getElementById("modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }


dots1El.addEventListener('click', () => {
    rrEl.style.backgroundColor = '#001e4d'
    rr2El.style.backgroundColor = '#001e4d'
    rr3El.style.backgroundColor = '#001e4d'
    rr4El.style.backgroundColor = '#001e4d'
    rr5El.style.backgroundColor = '#001e4d'
    rr6El.style.backgroundColor = '#001e4d'
    navbarEl.style.backgroundColor = '#001e4d'
    
})
dots2El.addEventListener('click', () => {
    rrEl.style.backgroundColor = 'hsl(191, 100%, 17%)'
    rr2El.style.backgroundColor = 'hsl(191, 100%, 17%)'
    rr3El.style.backgroundColor = 'hsl(191, 100%, 17%)'
    rr4El.style.backgroundColor = 'hsl(191, 100%, 17%)'
    rr5El.style.backgroundColor = 'hsl(191, 100%, 17%)'
    rr6El.style.backgroundColor = 'hsl(191, 100%, 17%)'
    navbarEl.style.backgroundColor = 'hsl(191, 100%, 17%)'
    
})
dots3El.addEventListener('click', () => {
    rrEl.style.backgroundColor = '#013b24'
    rr2El.style.backgroundColor = '#013b24'
    rr3El.style.backgroundColor = '#013b24'
    rr4El.style.backgroundColor = '#013b24'
    rr5El.style.backgroundColor = '#013b24'
    rr6El.style.backgroundColor = '#013b24'
    navbarEl.style.backgroundColor = '#013b24'
    
})
dots4El.addEventListener('click', () => {
    rrEl.style.backgroundColor = '#002229'
    rr2El.style.backgroundColor = '#002229'
    rr3El.style.backgroundColor = '#002229'
    rr4El.style.backgroundColor = '#002229'
    rr5El.style.backgroundColor = '#002229'
    rr6El.style.backgroundColor = '#002229'
    navbarEl.style.backgroundColor = '#002229'
    
})
dots5El.addEventListener('click', () => {
    rrEl.style.backgroundColor = 'hsl(289, 100%, 15%)'
    rr2El.style.backgroundColor = 'hsl(289, 100%, 15%)'
    rr3El.style.backgroundColor = 'hsl(289, 100%, 15%)'
    rr4El.style.backgroundColor = 'hsl(289, 100%, 15%)'
    rr5El.style.backgroundColor = 'hsl(289, 100%, 15%)'
    rr6El.style.backgroundColor = 'hsl(289, 100%, 15%)'
    navbarEl.style.backgroundColor = 'hsl(289, 100%, 15%)'
    
})
dots6El.addEventListener('click', () => {
    rrEl.style.backgroundColor = '#0f0f0f'
    rr2El.style.backgroundColor = '#0f0f0f'
    rr3El.style.backgroundColor = '#0f0f0f'
    rr4El.style.backgroundColor = '#0f0f0f'
    rr5El.style.backgroundColor = '#0f0f0f'
    rr6El.style.backgroundColor = '#0f0f0f'
    navbarEl.style.backgroundColor = '#0f0f0f'
    
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbxbC4-6EO0ioOiYEcpZ6XvzmdiiPdkAd306KYVxr3XZCPWzqrotq5WBLIIyM-D8AtEh6Q/exec';
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

const scriptURL1 = 'https://script.google.com/macros/s/AKfycbx0paIKS9USlGFsS62vQQ1WjnwLvDOikBUDpC5lCCOjdO12mSwpyRruNZx8uz2bLOe7Gg/exec'
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
    chiEl.innerHTML = 'What do you want to learn'
   
})


click1El.addEventListener('click', () => {
    form1El.style.display = 'block';
    form2El.style.display = 'none';
    imgEl.style.display = 'block';
    img1El.style.display = 'none';
    chiEl.innerHTML = 'Get in touch'

    
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


anime({
  targets: '.floats',
  translateY: 20,
  duration: 2000,
  loop: true,
  easing: 'easeInOutQuad',
  direction: 'alternate',

});

const readEl = document.getElementById("read");
function showText() {
  var dotsEl = document.getElementById("dots");
  var moreTextEl = document.getElementById("more");
  var abtEl = document.getElementById("abt");


  if (dotsEl.style.display === "none") {
    dotsEl.style.display = "inline";
    readEl.innerHTML = "See more";
    moreTextEl.style.display = "none";
    abtEl.style.display = "block";
  } else {
    dotsEl.style.display = "none";
    readEl.innerHTML = "See less";
    moreTextEl.style.display = "inline";
    abtEl.style.display = "none";
  }
}

readEl.addEventListener("click", showText)
