const sliderEL = document.querySelector(".slider");

const priceEL = document.querySelector(".price");


sliderEL.addEventListener("click", () => {
    if(!checkbox.checked){
        priceEL.textContent = "$160.00 /yearly";
        }else{
            priceEL.textContent = "$16.00 /yearly";
        
         }
    
})  





