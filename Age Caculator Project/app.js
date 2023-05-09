const calculateEL = document.getElementById('calculate');
const resetEL = document.getElementById('reset');
const resultEL = document.getElementById('result');



function calculateAge(){

    
    setInterval(() =>{
        let birthdate = new Date(document.getElementById('bdate').value);

        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageIns = ageInMs / 1000;
        let ageInMins = ageIns / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        document.getElementById('years').innerHTML = Math.floor(ageInYears)
        document.getElementById('months').innerHTML = Math.floor(ageInMonths % 12)
        document.getElementById('days').innerHTML = Math.floor(ageInDays % 30.4375)
        document.getElementById('Hrs').innerHTML = Math.floor(ageInHrs % 24)
        document.getElementById('mins').innerHTML = Math.floor(ageInMins % 60)
        document.getElementById('secs').innerHTML = Math.floor(ageIns % 60)

    },1000)
}
 
function reset(){
    window.location.reload();
}
// resultEL.innerHTML = "Your age is "  + {ageInYears} + " years old";

calculateEL.addEventListener('click', calculateAge)
resetEL.addEventListener('click', reset)