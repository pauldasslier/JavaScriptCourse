function sliderBottom() {
	let slideIndex = 1,
	    slides = document.getElementsByClassName('feedback-slider-item'),
	    prev = document.querySelector('.main-prev-btn'),
	    next = document.querySelector('.main-next-btn');

	showSlides();

	function showSlides(n) {
		// Делаем прокрутку слайдов бесконечными. Если слайдер достигает последнего документа,
		// возвращается к 1ому слайду и наоборот
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
  // Скрываем все слайды
		for(let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
  // Показываем только первый слайд
		slides[slideIndex - 1].style.display = 'block';
	}
 // Функция пролистывания слайдера
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

 // Вешаем обработчики события на стрелки вперед и назад
	prev.addEventListener('click', function() {
		plusSlides(-1);
	});
	next.addEventListener('click', function() {
		plusSlides(1);
	});
	
 // Запуск функции пролистывания слайдера во временном интервале
	let timerId = setTimeout(function tick() {
		plusSlides(1);
		timerId = setTimeout(tick, 5000);
	}, 5000);
}

module.exports = sliderBottom;