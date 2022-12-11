const btnEl = document.getElementById("btn")
const bodyEl = document.getElementById("body")

function bgColor(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)


    let bgCol = "rgb(" + x + "," + y + "," + z + ")"

    bodyEl.style.backgroundColor = bgCol;

    console.log(bgCol)
}

btnEl.addEventListener("click", bgColor)


