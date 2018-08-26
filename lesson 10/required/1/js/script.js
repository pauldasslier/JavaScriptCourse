'use strict'
window.addEventListener('DOMContentLoaded', function() {
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

	// Timer

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


 // Плавная прокрутка экрана
 
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
 	// Получаем навигационный блок и все ссылки в нем
	let nav = document.getElementsByTagName('nav')[0],
	    links = nav.getElementsByTagName('a');
	    
	    for (let i = 0; i < links.length; i++) {
	    	// Вешаем событие на каждую кликнутую ссылку
	    	links[i].addEventListener('click', () => {
	    		// Отменяем стандартные действия браузера
	    		event.preventDefault();
	    		// Задаем переменную для ссылки в цикле
	    		let link = links[i],
	    		// Получаем в переменную значение атрибута href
	    		    linkAttr = link.getAttribute('href');
	    		// Ищем в атрибуте href только буквенные значения
	    		linkAttr = linkAttr.match(/[a-z]/gi);
	    		// Полученный массив преобразовываем в строку
	    		let linkStr = linkAttr.join(''),
	    		// Ищем все элементы, в которых ID совпадает
	    		// со значением полученной выше строки
	    		    div = document.getElementById(linkStr),
	    		// Получем значение ID у найденных элементов
	    		    divId = div.getAttribute('id');
	    		// Если значение href в кликнутой ссылке равно
	    		// полученному значению ID то запускаем функцию
	    		// с анимацией
	    		if (linkStr == divId) {
	    			 // let divIdY = div.getBoundingClientRect().top;
	    				// window.scrollBy(0, divIdY / 20 -3);
	    			animate(function(timePassed) {
	    				let divIdY = div.getBoundingClientRect().top - 80;
	    				window.scrollBy(0, divIdY / 15);
	    			}, 1500);
	    		}

	    	});
	    };
 }

 getScroll();

 // Модальное окно

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

});


