function modalDesign() {
	let btnDesign = document.getElementsByClassName('button-design'),
	    close = document.getElementsByClassName('popup-close')[2],
	    modalForm = document.querySelector('.popup-design');

	function showModal() {
		for(let i = 0; i < btnDesign.length; i++) {
			// Запускаем обработчик события клик на каждую кнопку button-design
			btnDesign[i].addEventListener('click', function() {
				modalForm.style.display = 'block';
			});
			// Вешаем обработчик события на крестик у модального окна
			close.addEventListener('click', function() {
				modalForm.style.display = 'none';
			});
			// Вешаем обработчик события на подложку
			modalForm.addEventListener('click', function() {
				if (event.target == modalForm) {
					modalForm.style.display = 'none';
				}
			});
		}
	}

	showModal();
}

module.exports = modalDesign;