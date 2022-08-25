//1 - INTRODUCTION TO JAVASCRIPT






/*console.log('I like javascript');
console.log('I like icecream');

alert('i really like to eat'); ?

*/

// 2 - VARIABLES IN JAVASCRIPT
//to declare a variable, we either use var let or const
// the second way is by assignment.
//Data types

/*let  firstName = 'Akinbohun'; // strings
let age = 21;                  //numbers
let student = true;          //booleans


age = age + 1;


console.log("hello", firstName);
console.log("you are", age, "years old"); 
console.log("Enrolled", student);


document.getElementById('p1').innerHTML='hello ' + firstName;
document.getElementById('p2').innerHTML='you are ' + age + ' years old';
document.getElementById('p3').innerHTML='Enrolled: ' + student;

*/

//3 - ARITHMETIC OPERATORS IN JAVASCRIPT
//Arithmetic expressions include addition, subtraction, multiplication, division, and modulus.
//arithemtic expression is a combination of operands(values variales etc);

/*

let students = 20;
let extraStudents = students % 3;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students % 3;
 

//..AUGUMENTED ASSIGNMENT OPERATOR

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

//OPERATOR PRECEDENCE( javascript will calucalte the one in the brackets first).
//1. parentheses
let result = (1 + 2 ) * 3 + 4;

console.log(result);

*/

//4 -- HOW TO ACCEPT USER INPUT IN JAVASCRIPT
//easy way = Window.prompt();
//difficult way is HTML text box

//FIRST ONE WHICH IS EASY WAY

/*let userName = window.prompt('What is your name?');
console.log('Hello', userName);*/

//SECOND ONE WHICH IS DIFFICULT WAY.

/*let userName;

document.getElementById('myButton').onclick = function(){
    userName = document.getElementById('text').value
    console.log(userName);
    document.getElementById('myLabel').innerHTML= 'Hello ' + userName;

}

*/

// 5---TYPE COVERSION ( Changing the type of data)number strings booleans etx

/*let age = window.prompt('What is your age?');

console.log(typeof age);

age = Number(age); //how to change string to number
console.log(typeof age);
 age += 1;

 console.log("happy Birthday! you are", age, "years old");
*/
/*
let x;
let y;
let z;

x = Number('3.14'); //convert string to number
y = String('3.14'); //convert number to string
z = Boolean('peter'); //convert number to boolean


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

//CHECKBOXES properties
/*

document.getElementById('btn').onclick = function(){
    if (document.getElementById('mycheckbox').checked){
console.log('you are subscribed')
    }else{
        console.log('you are not subscribed');
    }

    const visaBtn = document.getElementById('VisaBtn');
    const masterBtn = document.getElementById('Mastercard');
    const paypalBtn = document.getElementById('paypal');
    
    if(visaBtn.checked){
        console.log('you are paying with visa');
    
    }else if(masterBtn.checked){
        console.log('you are paying with mastercard');
    }else if (paypalBtn.checked){
        console.log('you are paying with paypal');
    }else{
        console.log('you are not paying');
    }
    

    }


*/

//SWITCH STATEMENT

/*let grade = '95';

switch(grade){
    case 'A':
        console.log('you are awesome');
        break;
    case 'B':  
    console.log('you are good');
    break;
    case 'C':
        console.log('you are ok');
        break;
        default:
            console.log(grade, 'is not a valid grade');

    }
    */

//&& AND || OR OPERATOR
/*
    let temp = -15;
    let sunny = true;

    if (temp >= 0 &&  temp <=30 && sunny){
     console.log('It is too cold');
    }else{
        console.log('It is too hot');
    }
*/

//! NOT LOGIC OPERATOR
/*
let temp = 15;
let sunny = true;

if(!(temp >0)){
    console.log('It is too hot');

}else{
    console.log('It is too cold');
}

if(!sunny){
    console.log('It is too sunny');
}else{
    console.log('It is too cloudy');
}

*/

//WHILE LOOP  (while loop is used to execute a block of code as long as a condition is true)
/*
let userName = '';


while(userName == '' || userName == null){
    userName = window.prompt('whats your name?');
}

console.log('Hello', userName);

*/

//DO WHILE LOOP (do while loop is used to execute a block of code at least once)

/*
let userName;


   do{
    userName = window.prompt('whats your name?');
}while(userName == '' || userName == null)

console.log('Hello', userName);

*/

//for LOOP (for loop is used to execute a block of code a number of times)
/*
for (let i = 10; i > 0; i-=2){
    console.log(i);
}

console.log('happy new year');

*/

//break and continue statements
/*
for(i = 1; i <=20; i+=1){
if (i ==13){
    continue;
}

    console.log(i);

}

*/

//nest loop (nested loop)

/*
let symbol = window.prompt('Enter a symbol');
let rows = window.prompt('enter # of rows')
let columns = window.prompt('enter # of columns')

for(let i = 1; i <= rows; i+=1){

    for(let j = 1; j <= columns; j+=1){
       document.getElementById('rectangle').innerHTML +=i;
    
    }

    document.getElementById('rectangle').innerHTML +='<br>';3
}


*/

//FUNCTIONS
/*
startProgram();

function startProgram() {
  let userName = "ifedayo";
  let age = 35;

  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("happy birthday to ypu");
  console.log("happy birthday to you");
  console.log("happy birthday to you", userName);
  console.log("happy birthday to you");
  console.log("happy birthday to you", "you are ", age, "years old");
}

*/


//return statement (returns a value from a function)
/*

let area;
let height;
let width;

width = window.prompt('enter width');
height = window.prompt('enter height');

area = getArea(width, height);

console.log('the area is:', area)

function getArea(width, height){
    return width * height;
    

    
}

*/

//ternary operator (used to assign a value to a variable) shortcut for if else
/*
let adult  = checkAge(21);
console.log(adult);

function checkAge(age){
  return age >= 18 ? true : false

}

checkWinner(false)

function checkWinner(win){
    win? console.log ('you win') : console.log('you lose');
}

*/

//template literals (used to create strings)
/*
let userName = 'deey'
let items = 3;
let total = 75;

console.log(`${userName} bought ${items} and amounted to $${total}`)

*/

/*

let myNum = 123456.789;

//myNum = myNum. toLocaleString('en-us'); //us eng
//myNum = myNum. toLocaleString('hi-IN'); //us eng
//myNum = myNum. toLocaleString('de-DE'); //us eng


myNum = myNum. toLocaleString('en-us', {style: 'currency', currency: 'USD',});




console.log(myNum);

*/


//number guessing game with
/*

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submit").onclick = function(){

  let guess = document.getElementById("guesses").value
guesses += 1;

if(guess == answer){
    alert(`${answer} is the #. it took you ${guesses} guesses`)
}else if (guess < answer){
    alert("Too small");
}else{
    alert("Too large");
}

}

*/


//convertin temperature to degrees in javascript

/*

document.getElementById("sub").onclick = function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp =toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "&deg;C";

    }else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp =toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "&deg;F";

    }else{
        document.getElementById("tempLabel").innerHTML = "select a unit";
    }

}

let temp = 32;
temp = toCelsius(temp);
console.log(temp);

function toCelsius(temp){
    return(temp - 32) * 5/9;
}


function toFahrenheit(temp){
    return(temp * 9/5) + 32;
}

*/

// variabes that can store multiple vlues

/*

let fruits = ['apple', 'banana', 'orange', 'pear', 'strawberry'];

fruits.push("lemon"); //adds element to list
fruits.pop();          //removes last element from list
fruits.unshift("orange"); //adds element to beginning of list
fruits.shift(); //removes last element from beginning of list



let length = fruits.length;
let index = fruits.indexOf("apple");



console.log(length);

*/

/*
let prices = [10, 20, 30, 40, 50];

for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
for(let i = prices.length - 1; i > 0;  i+=1){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);

}

*/

///how to solve an array of stings in Aphabetical order





const number = document.getElementById('count');
const btn = document.getElementById('btn');

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = randomNumber;
}


btn.addEventListener('click', generateNumber);
