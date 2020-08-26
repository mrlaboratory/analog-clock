setInterval(()=>{
	const chh = document.querySelector(".hh");
const cmm = document.querySelector(".mm");
const css = document.querySelector(".ss");

let day = new Date();
let hour = day.getHours();
let minutes = day.getMinutes() * 6;
let seconds = day.getSeconds() * 6;
if(hour>12){
	hours=(hour-12)*30;
}else{
	hours=hour*30;	
}
chh.style.transform = `rotateZ(${hours}deg)`
cmm.style.transform = `rotateZ(${minutes}deg)`
css.style.transform = `rotateZ(${seconds}deg)`


	
	
})
	



