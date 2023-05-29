const calculateEL = document.getElementById('calculate');
const resetEL = document.getElementById('reset');
const dayEL = document.getElementById('day');
const monthEL = document.getElementById('month');
const yearEL = document.getElementById('year');
const errordayEL = document.getElementById('errorday');
const erroryearEL = document.getElementById('erroryear');
const errormonthEL = document.getElementById('errormonth');


function calculateAge(){
    if(dayEL.value === ""){
     errordayEL.innerText = "Empty date field"
     errordayEL.style.color = "hsl(0, 100%, 67%)"
     dayEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else if(dayEL.value >= 32){
        errordayEL.innerText = "Invalid date"
        errordayEL.style.color = "hsl(0, 100%, 67%)"
        dayEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else{
        errordayEL.innerText = ""
        dayEL.style.borderColor = "blue"
    }

    if(monthEL.value === ""){
     errormonthEL.innerText = "Empty month field"
     errormonthEL.style.color = "hsl(0, 100%, 67%)"
     monthEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else if(monthEL.value >= 13){
        errormonthEL.innerText = "Invalid month"
        errormonthEL.style.color = "hsl(0, 100%, 67%)"
        monthEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else{
        errormonthEL.innerText = ""
        monthEL.style.borderColor = "blue"
    }

    if(yearEL.value === ""){
     erroryearEL.innerText = "Empty year field"
     erroryearEL.style.color = "hsl(0, 100%, 67%)"
     yearEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else if(yearEL.value > 2023){
        erroryearEL.innerText = "Invalid year"
        erroryearEL.style.color = "hsl(0, 100%, 67%)"
        yearEL.style.borderColor = "hsl(0, 100%, 67%)"
    }else{
        erroryearEL.innerText = ""
        yearEL.style.borderColor = "blue"
          
    setInterval(() =>{
        let birthday = new Date(
            document.getElementById('year').value,
            document.getElementById('month').value - 1,
            document.getElementById('day').value
          );

          let now = new Date();
    let ageInMs = now.getTime() - birthday.getTime();
 
    let ageIns = ageInMs / 1000;
    let ageInMins = ageIns / 60;
    let ageInHrs = ageInMins / 60;
    let ageInDays = ageInHrs / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;

    document.getElementById('years').textContent = Math.floor(ageInYears);
    document.getElementById('months').textContent = Math.floor(ageInMonths % 12);
    document.getElementById('days').textContent = Math.floor(ageInDays % 30.4375);
    document.getElementById('Hrs').textContent = Math.floor(ageInHrs % 24);
    document.getElementById('mins').textContent = Math.floor(ageInMins % 60);
    document.getElementById('secs').textContent = Math.floor(ageIns % 60);
    },1000)
    }

  
}
 
function reset(){
    window.location.reload();
}
// resultEL.innerHTML = "Your age is "  + {ageInYears} + " years old";

calculateEL.addEventListener('click', calculateAge)
resetEL.addEventListener('click', reset)