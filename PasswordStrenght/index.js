let state,

passwordEl = document.getElementById("password");
btnEl = document.getElementById("btn");
btn2El = document.getElementById("btn2");
pstrEl= document.getElementById("pstr");
lowerEl = document.querySelector(".lower");
errorEl = document.querySelector(".error");
boxEl = document.querySelector(".box");
box2El = document.querySelector(".box2");
numberEl = document.querySelector(".num");
specialEl = document.querySelector(".special");
eightcharEl = document.querySelector(".eightchar");
showpasswordEl = document.querySelector(".--span-eye");
eyeIconEl = document.querySelector("#eye");

showpasswordEl.addEventListener("click", toggle)
eyeIconEl.addEventListener("click", toggleEye)
password.addEventListener("keyup", () => {
    let pass = passwordEl.value;
    checkStrength(pass)
    
});


function toggle(){
    if(state){
        passwordEl.setAttribute("type", "password");
        state = false;

    }else{
        passwordEl.setAttribute("type", "text");
        state = true;
    }
}


function toggleEye(){
    eyeIconEl.classList.toggle("fa-eye-slash")
}

function checkStrength(passwordEl){
    let strength = 0;

    if (passwordEl.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1
        addCheck(lowerEl);
    }else{
        removeCheck(lowerEl);
    }



if(passwordEl.match(/([0-9])/)){
    strength += 1
    addCheck(numberEl);
}else{
    removeCheck(numberEl);
   
}


if(passwordEl.match(/([!,@,#,$,%,^,&,*,.,~,,,])/)){
    strength += 1
    addCheck(specialEl)
}else{
    removeCheck(specialEl)
}

if(passwordEl.length > 7){
    strength += 1
    addCheck(eightcharEl)
}else{
    removeCheck(eightcharEl)

}


if (strength == 1) {
    removePstrEl();
    pstrEl.classList.add("pb-danger");
    pstrEl.style = "width: 25%"

}else if (strength == 2) {
    removePstrEl();
    pstrEl.classList.add("pb-warning");
    pstrEl.style = "width: 50%"
}


else if (strength == 3) {
    removePstrEl();
    pstrEl.classList.add("pb-primary");
    pstrEl.style = "width: 75%"


}else if (strength == 4) {
    removePstrEl();
    pstrEl.classList.add("pb-success");
    pstrEl.style = "width: 100%"
}

}

function removePstrEl() {
    pstrEl.classList.remove(
        
        
    "pb-danger",
    "pb-warning",
    "pb-primary",
    "pb-success",

    
    
    );

}


function addCheck(charRequired){
    charRequired.classList.remove("fa-check");
    charRequired.classList.add("fa-check2");

}

function removeCheck(charRequired){
    charRequired.classList.remove("fa-check2")
    charRequired.classList.add("fa-check")

}

function submit(e){
    e.preventDefault();
    
if (passwordEl.value == ""){
  errorEl.innerText = "password cannot be empty"
}

else if(!passwordEl.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
    errorEl.innerText = "password must contain a Upper and lower case letters"
}
else if(!passwordEl.value.match(/([0-9])/)){
    errorEl.innerText = "password must contain a number between 0 and 9"
}
else if(!passwordEl.value.match(/([!,@,#,$,%,^,&,*,.,~,,,])/)){
    errorEl.innerText = "password must contain a special character"
}else if (password.value.length < 8){
    errorEl.innerText = "password must be at least 8 characters";
}else{
    errorEl.style.color = "green";
    errorEl.innerText = ""
    boxEl.style.display = "none";
    box2El.style.display = "block";
}


}


btnEl.addEventListener("click", submit)



btn2El.addEventListener("click", () =>{
    box2El.style.display = "none";
    boxEl.style.display = "block";
})


