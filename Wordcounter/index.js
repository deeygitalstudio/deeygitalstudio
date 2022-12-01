const textEl = document.getElementById("text")
const countEl = document.getElementById("count")

function characterCount(){
	countEl.innerHTML = textEl.value.length
}


textEl.addEventListener("keyup", characterCount)
