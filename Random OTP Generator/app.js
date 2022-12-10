const countEL = document.getElementById('count');
const btnEL = document.getElementById('btn');



function generateOTP(){
    let digits = "0123456789"
    let OTP = ""

    for(let i = 0; i < 6; i++){
      OTP += digits [Math.floor(Math.random() * 10 )]
      countEL.innerText = OTP;
    }
    

    return OTP;

    


}



btnEL.addEventListener("click", generateOTP);