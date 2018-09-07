function slider() {
	let slideIndex = 1,
	    slides = document.getElementsByClassName('main-slider-item');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
		 slideIndex = 1;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		slides[slideIndex - 1].style.display = 'block';
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	let timerId = setTimeout(function tick() {
	  plusSlides(1)
	  timerId = setTimeout(tick, 5000);
	}, 5000);
}

module.exports = slider;