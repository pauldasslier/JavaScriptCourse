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