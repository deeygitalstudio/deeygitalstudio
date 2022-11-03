const threeEl = document.querySelector(".three");
const markEl = document.querySelector(".mark");
const unreadEl = document.querySelector(".unread");
const showEl = document.querySelector(".show");
const closeEl = document.querySelector(".close");
const hideEl = document.querySelector(".com");
const listEls = document.querySelectorAll("li");



markEl.addEventListener("click", () => {
    threeEl.textContent = 0;
   for (var i = 0; i < listEls.length; i++) {
    listEls[i].style.backgroundColor = "white";
   }

   if (listEls.length > 0) {
    unreadEl.style.display = "block";
    threeEl.textContent = 0;
    markEl.style.display = "none";
   }else{
    markEl.style.display = "block";
    threeEl.textContent = 7;
   }
})
unreadEl.addEventListener("click", () => {
    threeEl.textContent = 0;
   for (var i = 0; i < listEls.length; i++) {
    listEls[i].style.backgroundColor = "#EBF3FF";
   }

   if (listEls.length > 0) {
    unreadEl.style.display = "none";
    threeEl.textContent = 7;
    markEl.style.display = "block";
   }else{
    markEl.style.display = "none";
    threeEl.textContent = 0;
   }
});



listEls[3].addEventListener('click', () =>{
  hideEl.style.display = "block";
  listEls[3].style.backgroundColor = "white";
  threeEl.textContent = 6;
     
  if(listEls[3].backgroundColor === "white"){
    threeEl.textContent = 0;
  }else{
    threeEl.textContent = 6;
  }


})
closeEl.addEventListener('click', () =>{
  hideEl.style.display = "none";
  listEls[3].style.backgroundColor = "white";
  
})



   

