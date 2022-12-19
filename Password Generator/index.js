
const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*+=-_?";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const passEl = document.getElementById("password");

function passwordGen(){
  let initialPassword = empty;
  (upperCase.checked) ? initialPassword += uCase : "";
  (lowerCase.checked) ? initialPassword += lCase : "";
  (pNumber.checked) ? initialPassword += number : "";
  (pSymbol.checked) ? initialPassword += symbol : "";

  passEl.value = generatePassword(pLength.value, initialPassword);
};

function generatePassword (l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length));
  }

  return pass;
}



const copy = document.getElementById("copy");

function copyPass(){
  if (password.value == "") {
    alert("Please enter a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Please has been copied to clipboard");
  }
};


submit.addEventListener('click', passwordGen)
copy.addEventListener('click', copyPass)






