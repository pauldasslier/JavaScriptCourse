function timer() {
	let deadline = '2018-08-26';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
	     seconds = Math.floor( (t / 1000) % 60),
	     minutes = Math.floor( (t / 1000 / 60) % 60),
	     hours = Math.floor(t / (1000 * 60 * 60) );

	     seconds = (seconds < 10) ? '0' + seconds : seconds;
	     minutes = (minutes < 10) ? '0' + minutes : minutes;
	     hours = (hours < 10) ? '0' + hours : hours;

	     return {
	     	'total': t,
	     	'hours': hours,
	     	'minutes': minutes,
	     	'seconds': seconds
	     };
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		    hours = timer.querySelector('.hours'),
		    minutes = timer.querySelector('.minutes'),
		    seconds = timer.querySelector('.seconds');

		    function updateClock() {
		    	let t = getTimeRemaining(endtime);
		    	hours.innerHTML = t.hours,
		    	minutes.innerHTML = t.minutes,
		    	seconds.innerHTML = t.seconds;

		    	if (t.total <= 0) {
		    		clearInterval(timeInterval);
		    		hours.textContent = '00';
		    		minutes.textContent = '00';
		    		seconds.textContent = '00';
		    	}
		    }
	     let timeInterval = setInterval(updateClock, 100);
		    updateClock();
		    
	}

	setClock('timer', deadline);
}

module.exports = timer;