let simpleTimer = setTimeout(getTimer, 1000);

function getTimer() {

	let now = new Date(),
		   hours = now.getHours(),
		   minutes = now.getMinutes(),
		   seconds = now.getSeconds(),
		   timer;

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	timer = hours + ':' + minutes + ':' + seconds;

	timer_value.textContent = timer;
	simpleTimer = setTimeout(getTimer, 100);
}