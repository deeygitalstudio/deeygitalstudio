var menubtn = document.getElementById('menuBtn')
var sideNav = document.getElementById('sideNav')
var menu = document.getElementById('menu')
var close = document.getElementById('closebtn')

sideNav.style.right = "-250px"



menubtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
         menubtn.style.display = "none";
         close.style.display = "block";
    } else{
        sideNav.style.right = "-250px";
        close.style.display = "block";
    }
}

close.onclick = function(){
 sideNav.style.right = "-250px";
    menubtn.style.display = "block";
    close.style.display = "none";
    
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
})