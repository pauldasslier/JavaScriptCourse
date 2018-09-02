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