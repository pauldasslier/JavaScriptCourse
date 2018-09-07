function modalGift() {
	let gift = document.querySelector('.fixed-gift'),
	    modalForm = document.querySelector('.popup-gift'),
	    close = document.getElementsByClassName('popup-close')[1];

	gift.addEventListener('click', function() {
		modalForm.style.display = 'block';
		this.remove(gift);
	});

	close.addEventListener('click', function() {
		modalForm.style.display = 'none';
	});

	modalForm.addEventListener('click', function() {
		if (event.target == modalForm) {
			modalForm.style.display = 'none';
		}
	});
}

module.exports = modalGift;