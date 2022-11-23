const keysEl = document.getElementsByTagName("li");
const resultEl = document.querySelector("p");
const eraseEl = document.querySelector(".erase");
const hourEl = document.querySelector('.hour');
const secondsEl  = document.querySelector('.seconds');

 for (let i = 0; i < keysEl.length; i++){
    if(keysEl[i].innerHTML === "="){
        keysEl[i].addEventListener("click", calculate);
    }else{
        keysEl[i].addEventListener("click", addToCurrentValue(i));
    }
 }

 function addToCurrentValue(i){
    return () => {
        if(keysEl[i].innerHTML === "÷"){
            resultEl.innerHTML += "/";

    }else if (keysEl[i].innerHTML === "x"){
        resultEl.innerHTML += "*"
    }else{
        resultEl.innerHTML += keysEl[i].innerHTML
    }
 }
}

function calculate() {
    return (resultEl.innerHTML = eval(resultEl.innerHTML));
}

eraseEl.addEventListener("click", () => {
    resultEl.innerHTML = "";
})


const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }


    hourEl.textContent = currentHour.toString();
    secondsEl.textContent = currentMinute.toString().padStart(2, '0');

} 
setInterval(updateTime, 1000);
updateTime();
