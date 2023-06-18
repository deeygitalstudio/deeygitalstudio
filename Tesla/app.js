const modelsEL = document.getElementById('models')
const model3EL = document.getElementById('model3')
const modelxEL = document.getElementById('modelx')
const modelyEL = document.getElementById('modely')
const bodyEL = document.getElementById('body')


const spEl = document.querySelector('.sp')
const mpEl = document.querySelector('.mp')
const raEl = document.querySelector('.ra')
const carEl = document.querySelector('.car')


model3EL.addEventListener('click', () => {
    bodyEL.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/image-2.png')";
    carEl.innerHTML = "Model 3"
    spEl.innerHTML = "220Mph"
    mpEl.innerHTML = "1.7s"
    raEl.innerHTML = "415mi"
    carEl.innerHTML = "Model 3"
  });



modelsEL.addEventListener('click', () => {
    bodyEL.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/image-1.png')";
    carEl.innerHTML = "Model S"
    spEl.innerHTML = "320Mph"
    mpEl.innerHTML = "1.67s"
    raEl.innerHTML = "296mi"
    
  });

modelxEL.addEventListener('click', () => {
    bodyEL.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/image-3.png')";
    spEl.innerHTML = "460Mph"
    mpEl.innerHTML = "1.97s"
    raEl.innerHTML = "325mi"
    carEl.innerHTML = "Model X"
  });


modelyEL.addEventListener('click', () => {
    bodyEL.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/image-4.png')";
    carEl.innerHTML = "Model Y"
    spEl.innerHTML = "200Mph"
    mpEl.innerHTML = "1.9s"
    raEl.innerHTML = "396mi"

  });


