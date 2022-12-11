
const loginEl = document.querySelector("#login");
const backEl = document.querySelector("#back");
const resetEl = document.querySelector("#reset");
const forgetEl = document.querySelector("#forget");
const loginformEl = document.querySelector(".loginform");
const signupEl = document.querySelector("#signup");
const signupformEl = document.querySelector("#signupform");

loginEl.addEventListener("click", () => {	
signupformEl.style.display = "block";
loginformEl.style.display = "none";


})

signupEl.addEventListener("click", () => {	
   signupformEl.style.display = "none";
   loginformEl.style.display = "block";
})

forgetEl.addEventListener("click", () => {
   loginformEl.style.display = "none";
   signupformEl.style.display = "none";
   resetEl.style.display = "block";
})

backEl.addEventListener("click", () => {
   resetEl.style.display = "none";
   loginformEl.style.display = "block";
})
