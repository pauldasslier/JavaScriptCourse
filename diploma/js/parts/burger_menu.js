function getBurger() {
	let burgerBtn = document.querySelector('.burger'),
	    burgerMenu = document.querySelector('.burger-menu'),
	    maxWidth,
	    btnStyle;

	    burgerBtn.addEventListener('click', function() {
	    	maxWidth = document.documentElement.clientWidth;
	    	if (maxWidth <= 768) {
	    		burgerMenu.classList.toggle('show');
	    	}
	    });

	    let timerId = setTimeout(function tick() {
	    	maxWidth = document.documentElement.clientWidth;
	    	if (maxWidth > 768) {
	    		for(let i = 0; i < burgerMenu.classList.length; i++) {
	    			burgerMenu.classList = burgerMenu.classList[0];
	    		}
	    	}
	    	timerId = setTimeout(tick, 40);
	    }, 40);
}


module.exports = getBurger;