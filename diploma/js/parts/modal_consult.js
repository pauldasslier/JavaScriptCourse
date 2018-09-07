function modalConsult() {
	let btnConsult = document.getElementsByClassName('button-consultation'),
	    modalForm = document.querySelector('.popup-consultation'),
	    close = document.getElementsByClassName('popup-close')[0];

	function showModal() {
		for(let i = 0; i < btnConsult.length; i++) {
			btnConsult[i].addEventListener('click', function() {
				modalForm.style.display = 'block';
			});
			close.addEventListener('click', function() {
				modalForm.style.display = 'none';
			});
			modalForm.addEventListener('click', function() {
				if (event.target == modalForm) {
					modalForm.style.display = 'none';
				}
			})
		}
	}

	showModal();
}

module.exports = modalConsult;