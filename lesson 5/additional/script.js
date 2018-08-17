let now = new Date;

function formatDate() {
	let year = now.getFullYear(),
	    month = now.getMonth() + 1,
	    date = now.getDate(),
	    hours = now.getHours(),
	    minutes = now.getMinutes(),
	    seconds = now.getSeconds();

	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	} 
	if (hours < 10) {
		hours = '0' + hours;
	} 
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

console.log(hours + ':' + minutes + ':' + seconds + ' ' + date + '.'
		+ month + '.' + year);
}
formatDate();


function weekDay() {
	let week = [
 'понедельник',
 'вторник',
 'среда',
 'четверг',
 'пятница',
 'суббота',
 'воскресенье'
 ]

 let day = now.getDay() + 1;
 
 for(let i = 0; i < week.length; i++) {
 	if (i == day - 1) {
 		console.log(week[i]);
 	}
 }
}

weekDay();

let div = document.getElementById('result');

function difference() {
	let x = document.getElementById('first').value;
	let y = document.getElementById('second').value;

	let result = (Math.abs(new Date(x).getTime() - new Date(y).getTime())/1000/60/60/24);
	if (typeof(result) == 'number') {
		div.innerHTML = result;
	}
}
document.getElementById('btn').onclick = difference;