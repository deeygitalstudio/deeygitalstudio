const keysEl = document.querySelectorAll("li");
const lis = document.querySelectorAll('li')
const resultEl = document.querySelector("p");
const eraseEl = document.querySelector(".erase")
const equalsEl = document.querySelector(".equals")
const screenEl = document.querySelector(".screen")
const btns = document.querySelectorAll(".btn")
const h4s = document.querySelector(".h4")
const h4ss = document.querySelector(".h4ss")


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

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const styles = e.currentTarget.classList
      if(styles.contains('purples')){
        document.body.style.backgroundColor = 'lightgray'
        h4s.style.color ='black'
        h4ss.style.color ='black'
        screenEl.style.backgroundColor = 'hsl(0, 0%, 100%)'
        resultEl.style.color = 'black'
        eraseEl.style.backgroundColor = ' hsl(25, 98%, 40%)';
        equalsEl.style.backgroundColor = ' hsl(25, 98%, 40%)';
        equalsEl.style.color = 'white'
      }else if(styles.contains('greys')){
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
        h4s.style.color ='hsl(52, 100%, 62%)'
        h4ss.style.color ='hsl(52, 100%, 62%)'
        eraseEl.style.backgroundColor = "hsl(52, 100%, 62%)"
        screenEl.style.backgroundColor = 'hsl(268, 71%, 12%)'
        resultEl.style.color = 'hsl(52, 100%, 62%)'
        equalsEl.style.color = 'white'
        equalsEl.style.backgroundColor = 'hsl(52, 100%, 62%)'
      }else{
        document.body.style.backgroundColor = 'hsl(223, 31%, 20%)'
        h4s.style.color ='white'
        h4ss.style.color ='white'
        eraseEl.style.backgroundColor = "hsl(176, 100%, 44%)"
        screenEl.style.backgroundColor = 'hsl(223, 39%, 12%)'
        resultEl.style.color = 'white'
        equalsEl.style.color = 'white'
        equalsEl.style.backgroundColor = 'hsl(176, 100%, 44%)'
      }
    })
})




