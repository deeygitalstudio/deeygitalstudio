

const count = document.querySelector('.count');
//const Add = document.querySelector('.Add');
//const resetCount = document.querySelector('.Reset');
//const sub = document.querySelector('.subtract');
const buttons = document.querySelector('.buttons');


buttons.addEventListener('click', (e) => {
    if ( e.target.classList.contains('Add')) {
        count.innerHTML++; setColor();

    }


    if ( e.target.classList.contains('Reset')) {
        count.innerHTML = 0; setColor();

    }

    if ( e.target.classList.contains('subtract')) {
        count.innerHTML--; setColor();

    }

});



function setColor() {
 if (count.innerHTML > 0) {
     count.style.color = 'yellow'

 } else if (count.innerHTML < 0) {
     count.style.color = 'cyan'
  }  else {
        count.style.color = 'purple'
    }


}







/*Add.addEventListener('click', () => {
   count.innerHTML++;
});


resetCount.addEventListener('click', () => {
    count.innerHTML = 0;
});


sub.addEventListener('click', () => {
   count.innerHTML--;
});*/