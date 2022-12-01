const textEl = document.getElementById("text")
const countEl = document.getElementById("count")
const clearEl = document.getElementById("clear")

function characterCount(){
	countEl.innerHTML = textEl.value.length
}


textEl.addEventListener("keyup", characterCount)
clearEl.addEventListener("click", clear)

function clear(){
	textEl.value = "";
	countEl.innerHTML = "0";
}
