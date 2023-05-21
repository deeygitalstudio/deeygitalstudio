const hourEl = document.querySelector('.hour')
const secondEl = document.querySelector('.seconds')
const minutesEl = document.querySelector('.minutes')
const hrsEl = document.querySelector('.hrs')
const minsEl = document.querySelector('.mins')
const secsEl = document.querySelector('.secs')


function updateClock(){
const currentDate = new Date()
// setTimeout(updateClock, 1000)
const hour = currentDate.getHours()
const minutes= currentDate.getMinutes()
const seconds = currentDate.getSeconds()
const ampmEl = document.querySelector('.ampm')
console.log(hour, minutes, seconds);

const hourDeg = (hour / 12) * 360;
hourEl.style.transform = `rotate(${hourDeg}deg)`;
const minuteDeg = (minutes / 60) * 360;
minutesEl.style.transform = `rotate(${minuteDeg}deg)`;
const secondDeg = (seconds / 60) * 360;
secondEl.style.transform = `rotate(${secondDeg}deg)`;

hrsEl.innerHTML = hour % 12 + " : " ;
minsEl.innerHTML = minutes + " :";
secsEl.innerHTML = seconds; 

if(hour >= 12){
  ampmEl.innerHTML = "PM"
}else{
    ampmEl.innerHTML = "AM"
}

}



setInterval(updateClock, 1000)


// updateClock()
