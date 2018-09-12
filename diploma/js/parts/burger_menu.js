function getBurger() {
	   let burgerBtn = document.querySelector('.burger'),
	    burgerMenu = document.querySelector('.burger-menu');

	let timerId = setTimeout(function tick() {
		let maxWidth = document.documentElement.clientWidth;

		if (maxWidth <= 768) {

			burgerBtn.onclick = function() {
				open();
			}
			function open() {
				burgerMenu.classList.toggle('show');
			}

		} else {
			document.querySelector('.burger-menu').style.setProperty('display', 'none', 'important');
		}

	  timerId = setTimeout(tick, 40);
	}, 40);
}


module.exports = getBurger;