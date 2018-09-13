function sliderTop() {
	let slideIndex = 1,
	    slides = document.getElementsByClassName('main-slider-item');

	showSlides(slideIndex);

	function showSlides(n) {
		// Делаем прокрутку слайдов бесконечными. Если слайдер достигает последнего документа,
		// возвращается к 1ому слайду
		if (n > slides.length) {
		 slideIndex = 1;
		}
  // Скрываем все слайды
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
  // Показываем только первый слайд
		slides[slideIndex - 1].style.display = 'flex';
	}
 // Функция пролистывания слайдера
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
 // Запуск функции пролистывания слайдера во временном интервале
	let timerId = setTimeout(function tick() {
	  plusSlides(1);
	  timerId = setTimeout(tick, 5000);
	}, 5000);
}


module.exports = sliderTop;