window.onload = () => {
    swal("This project is just to test my basic javascript skills")
}

const countEL = document.getElementById("count");
const increaseEL = document.getElementById("increase");
const decreaseEL = document.getElementById("decrease");
const supEL = document.getElementById("sup");
const cartsEL = document.getElementById("carts");
const btnEL = document.getElementById("btn");
const amountEL = document.getElementById("amount");
const image1EL = document.getElementById("image1");
const image2EL = document.getElementById("image2");
const image3EL = document.getElementById("image3");
const image4EL = document.getElementById("image4");
const img1EL = document.getElementById("img1");
const img2EL = document.getElementById("img2");
const img3EL = document.getElementById("img3");
const img4EL = document.getElementById("img4");
const perEL = document.getElementById("per");



increaseEL.addEventListener('click', () => {
    countEL.textContent++
    
   
   
})
decreaseEL.addEventListener('click', () => {
    countEL.textContent--;
  
})

btnEL.addEventListener('click', () => {
    
    var total = 125;
    supEL.textContent = countEL.textContent;
    total = total *  supEL.textContent;
    amountEL.innerHTML =  '$' + total;

    if(countEL.textContent <= 0){
        swal('Please select the amount you want to buy')
    }else{
        swal(countEL.textContent + ' item(s) has been added to cart and the amount is ' + amountEL.innerHTML)
    }
});


function changeImage1(){
  image1EL.style.display = 'none';
  image2EL.style.display = 'block';
  image3EL.style.display = 'none';
  image4EL.style.display = 'none';

}

function changeImage2(){
    image1EL.style.display = 'block';
  image2EL.style.display = 'none';
  image3EL.style.display = 'none';
  image4EL.style.display = 'none';
}

function changeImage3(){
    image3EL.style.display = 'block';
    image2EL.style.display = 'none';
    image1EL.style.display = 'none';
    image4EL.style.display = 'none';
}

function changeImage4(){
    image3EL.style.display = 'none';
    image2EL.style.display = 'none';
    image1EL.style.display = 'none';
    image4EL.style.display = 'block';
}

img2EL.addEventListener('click', changeImage1);
img1EL.addEventListener('click', changeImage2);
img3EL.addEventListener('click', changeImage3);
img4EL.addEventListener('click', changeImage4);

