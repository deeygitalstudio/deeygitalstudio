const inputEl = document.getElementById('text');
const btnEl = document.getElementById('btn');
const countEl = document.getElementById('count');
const clearEl = document.getElementById('clear');


function counterWords(){
inputEl.addEventListener('keyup', () => {
	inputEl.value.length;
	
	
	
})
	
countEl.innerHTML = inputEl.value.length;
if(inputEl.value === ""){
	  countEl.innerText = "Please enter a text";
	  countEl.style.color = "red";
	  
	  
	}else{
		countEl.innerText = countEl.innerHTML = inputEl.value.length;
	  countEl.style.color = "blue";
	  
	}
	 
	
};


clearEl.addEventListener('click', () =>{
	countEl.innerText = 0;
	inputEl.value = "";
 })

btnEl.addEventListener('click', counterWords)
	


