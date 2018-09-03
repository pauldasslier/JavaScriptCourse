(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'
window.addEventListener('DOMContentLoaded', function() {

	let tabs = require('../parts/tabs.js');
  let timer = require('../parts/timer.js');
  let scroll = require('../parts/scroll.js');
  let modal = require('../parts/modal.js');
  let send = require('../parts/send.js');
  let slider = require('../parts/slider.js');
  let calculator = require('../parts/calculator.js');

  tabs();
  timer();
  scroll();
  modal();
  send();
  slider();
  calculator();

});






},{"../parts/calculator.js":2,"../parts/modal.js":3,"../parts/scroll.js":4,"../parts/send.js":5,"../parts/slider.js":6,"../parts/tabs.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personsSum = 0,
	    daysSum = 0,
	    total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function() {
	 let personsValue = persons.value;
	 personsSum = +this.value;
	 total = (daysSum + personsSum) * 4000;


	 if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
	 	totalValue.innerHTML = 0;
	 } else if (persons.value % 1 !== 0) {
	 	persons.value = Math.floor(persons.value);
	 } else {
	 	getSelect();
	 }

	 if (persons.value == '') {
	 	persons.value = '';
	 }

	});

	restDays.addEventListener('input', function() {
	 daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else if (restDays.value % 1 !== 0) {
			restDays.value = Math.floor(restDays.value);
		} else {
			getSelect();
		}

		if (restDays.value == '') {
			restDays.value = '';
		}

	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
 		totalValue.innerHTML = 0;
		} else {
			getSelect();
		}

	});

	function getSelect() {
		let x = total;
		totalValue.innerHTML = x * place.options[place.selectedIndex].value;
	}
}

module.exports = calculator;
},{}],3:[function(require,module,exports){
function modal() {
	let more = document.getElementsByClassName('more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	function getModal() {
		for(let i = 0; i < more.length; i++) {
			more[i].addEventListener('click', function() {
				this.classList.add('more-splash');
		  overlay.style.display = 'block';
		  document.body.style.overflow = 'hidden';
			});
		close.addEventListener('click', function() {
		 overlay.style.display = 'none';
		 more[i].classList.remove('more-splash');
		 document.body.style.overflow = '';
	  });
		}
	}

	getModal();
}

module.exports = modal;
},{}],4:[function(require,module,exports){
function scroll() {
	 function getScroll() {

	 	function animate(draw, duration) {
	 		var start = performance.now();

	 		requestAnimationFrame(function animate(time) {
	 			var timePassed = time - start;

	 			if (timePassed > duration) {
	 				timePassed = duration;
	 			}

	 			draw(timePassed);

	 			if (timePassed < duration) {
	 				requestAnimationFrame(animate);
	 			}
	 		});
	 	}
	 	// ╨Я╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╨╛╨╜╨╜╤Л╨╣ ╨▒╨╗╨╛╨║ ╨╕ ╨▓╤Б╨╡ ╤Б╤Б╤Л╨╗╨║╨╕ ╨▓ ╨╜╨╡╨╝
		let nav = document.getElementsByTagName('nav')[0],
		    links = nav.getElementsByTagName('a');
		    
		    for (let i = 0; i < links.length; i++) {
		    	// ╨Т╨╡╤И╨░╨╡╨╝ ╤Б╨╛╨▒╤Л╤В╨╕╨╡ ╨╜╨░ ╨║╨░╨╢╨┤╤Г╤О ╨║╨╗╨╕╨║╨╜╤Г╤В╤Г╤О ╤Б╤Б╤Л╨╗╨║╤Г
		    	links[i].addEventListener('click', () => {
		    		// ╨Ю╤В╨╝╨╡╨╜╤П╨╡╨╝ ╤Б╤В╨░╨╜╨┤╨░╤А╤В╨╜╤Л╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╤П ╨▒╤А╨░╤Г╨╖╨╡╤А╨░
		    		event.preventDefault();
		    		// ╨Ч╨░╨┤╨░╨╡╨╝ ╨┐╨╡╤А╨╡╨╝╨╡╨╜╨╜╤Г╤О ╨┤╨╗╤П ╤Б╤Б╤Л╨╗╨║╨╕ ╨▓ ╤Ж╨╕╨║╨╗╨╡
		    		let link = links[i],
		    		// ╨Я╨╛╨╗╤Г╤З╨░╨╡╨╝ ╨▓ ╨┐╨╡╤А╨╡╨╝╨╡╨╜╨╜╤Г╤О ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ ╨░╤В╤А╨╕╨▒╤Г╤В╨░ href
		    		    linkAttr = link.getAttribute('href');
		    		// ╨Ш╤Й╨╡╨╝ ╨▓ ╨░╤В╤А╨╕╨▒╤Г╤В╨╡ href ╤В╨╛╨╗╤М╨║╨╛ ╨▒╤Г╨║╨▓╨╡╨╜╨╜╤Л╨╡ ╨╖╨╜╨░╤З╨╡╨╜╨╕╤П
		    		linkAttr = linkAttr.match(/[a-z]/gi);
		    		// ╨Я╨╛╨╗╤Г╤З╨╡╨╜╨╜╤Л╨╣ ╨╝╨░╤Б╤Б╨╕╨▓ ╨┐╤А╨╡╨╛╨▒╤А╨░╨╖╨╛╨▓╤Л╨▓╨░╨╡╨╝ ╨▓ ╤Б╤В╤А╨╛╨║╤Г
		    		let linkStr = linkAttr.join(''),
		    		// ╨Ш╤Й╨╡╨╝ ╨▓╤Б╨╡ ╤Н╨╗╨╡╨╝╨╡╨╜╤В╤Л, ╨▓ ╨║╨╛╤В╨╛╤А╤Л╤Е ID ╤Б╨╛╨▓╨┐╨░╨┤╨░╨╡╤В
		    		// ╤Б╨╛ ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡╨╝ ╨┐╨╛╨╗╤Г╤З╨╡╨╜╨╜╨╛╨╣ ╨▓╤Л╤И╨╡ ╤Б╤В╤А╨╛╨║╨╕
		    		    div = document.getElementById(linkStr),
		    		// ╨Я╨╛╨╗╤Г╤З╨╡╨╝ ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ ID ╤Г ╨╜╨░╨╣╨┤╨╡╨╜╨╜╤Л╤Е ╤Н╨╗╨╡╨╝╨╡╨╜╤В╨╛╨▓
		    		    divId = div.getAttribute('id');
		    		// ╨Х╤Б╨╗╨╕ ╨╖╨╜╨░╤З╨╡╨╜╨╕╨╡ href ╨▓ ╨║╨╗╨╕╨║╨╜╤Г╤В╨╛╨╣ ╤Б╤Б╤Л╨╗╨║╨╡ ╤А╨░╨▓╨╜╨╛
		    		// ╨┐╨╛╨╗╤Г╤З╨╡╨╜╨╜╨╛╨╝╤Г ╨╖╨╜╨░╤З╨╡╨╜╨╕╤О ID ╤В╨╛ ╨╖╨░╨┐╤Г╤Б╨║╨░╨╡╨╝ ╤Д╤Г╨╜╨║╤Ж╨╕╤О
		    		// ╤Б ╨░╨╜╨╕╨╝╨░╤Ж╨╕╨╡╨╣
		    		if (linkStr == divId) {
		    			animate(function(timePassed) {
		    				let divIdY = div.getBoundingClientRect().top - 80;
		    				window.scrollBy(0, divIdY / 15);
		    			}, 1500);
		    		}

		    	});
		    };
	 }

	 getScroll();
}

module.exports = scroll;
},{}],5:[function(require,module,exports){
function send() {
	 let message = new Object();
	 message.loading = '╨Ч╨░╨│╤А╤Г╨╖╨║╨░...';
	 message.success = '╨б╨┐╨░╤Б╨╕╨▒╨╛, ╤Б╨║╨╛╤А╨╛ ╨╝╤Л ╤Б ╨▓╨░╨╝╨╕ ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П';
	 message.failure = '╨з╤В╨╛-╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║';

	 // ╨С╨╗╨╛╨║ ╨┤╨╗╤П ╨╛╨┐╨╛╨▓╨╡╤Й╨╡╨╜╨╕╤П

	 let statusMessage = document.createElement('div');
	     statusMessage.classList.add('status');

	 // ╨Ь╨╛╨┤╨░╨╗╤М╨╜╨░╤П ╤Д╨╛╤А╨╝╨░

	 let form = document.getElementsByClassName('main-form')[0],
	     modalInput = form.getElementsByTagName('input');

	 // ╨Ъ╨╛╨╜╤В╨░╨║╤В╨╜╨░╤П ╤Д╨╛╤А╨╝╨░

	 let contactForm = document.getElementsByClassName('contact-form')[0],
	     contactInput = contactForm.getElementsByTagName('input');

	 let sendForm = function(formType, formInput) {
		     formType.addEventListener('submit', function(event) {
	     	event.preventDefault();
	     	formType.appendChild(statusMessage);

	     	// AJAX

	     	let request = new XMLHttpRequest();
	     	request.open('POST', 'server.php');

	     	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	     	let formData = new FormData(formType);

	     	request.send(formData);

	     	request.onreadystatechange = function() {
	     		if (request.readyState < 4) {
	     			statusMessage.innerHTML = message.loading;
	     		} else if (request.readyState === 4) {
	     			if (request.status == 200 && request.status < 300) {
	     				statusMessage.innerHTML = message.success;
	     				// ╨Ф╨╛╨▒╨░╨▓╨╗╤П╨╡╨╝ ╨║╨╛╨╜╤В╨╡╨╜╤В ╨╜╨░ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Г
	     			}
	     			else {
	     				statusMessage.innerHTML = message.failure;
	     			}
	     		}
	     	}

	     	for (let i = 0; i < formInput.length; i++) {
	     		// ╨Ю╤З╨╕╤Й╨░╨╡╨╝ ╨┐╨╛╨╗╤П ╨▓╨▓╨╛╨┤╨░
	     		formInput[i].value = '';
	     	}
	     });
	 };

	 sendForm(form, modalInput);
	 sendForm(contactForm, contactInput);
}

module.exports = send;
},{}],6:[function(require,module,exports){
function slider() {
	let slideIndex = 1,
	    slides = document.getElementsByClassName('slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dots = document.getElementsByClassName('dot');

	    showSlides(slideIndex);

	function showSlides(n) {

	 if (n > slides.length) {
	  slideIndex = 1;
	 }
	 if (n < 1) {
	  slideIndex = slides.length;
	 }

	 for (let i = 0; i < slides.length; i++) {
	 	slides[i].style.display = 'none';
	 }
	 for (let i = 0; i < dots.length; i++) {
	 	dots[i].classList.remove('dot-active');
	 }

	 slides[slideIndex - 1].style.display = 'block';
	 dots[slideIndex - 1].classList.add('dot-active');
 }

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
 	showSlides(slideIndex = n);
	}

 prev.addEventListener('click', function() {
 	plusSlides(-1);
 });

 next.addEventListener('click', function() {
 	plusSlides(1);
 });

 dotsWrap.addEventListener('click', function(event) {
 	for (let i = 0; i < dots.length + 1; i++) {
 		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
 			currentSlide(i);
 		}
 	}
 });
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tabs() {
	let tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);


	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});
}

module.exports = tabs;
},{}],8:[function(require,module,exports){
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
},{}]},{},[1]);
