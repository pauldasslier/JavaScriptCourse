function getBurger() {
	   let burgerBtn = document.querySelector('.burger'),
	    burgerMenu = document.querySelector('.burger-menu');

	let timerId = setTimeout(function tick() {
		let maxWidth = document.documentElement.clientWidth;

		if (maxWidth <= 768) {
			burgerBtn.addEventListener('click', function() {
				burgerMenu.style.display = 'block';
			});
		} else {
			burgerMenu.style.display = 'none';
		}

	  timerId = setTimeout(tick, 40);
	}, 40);
}


module.exports = getBurger;