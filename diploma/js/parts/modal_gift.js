function modalGift() {
	let gift = document.querySelector('.fixed-gift'),
	    modalForm = document.querySelector('.popup-gift'),
	    close = document.getElementsByClassName('popup-close')[1];

 // Запускаем обработчик события клик на иконку подарка
	gift.addEventListener('click', function() {
		modalForm.style.display = 'block';
		gift.style.display = 'none';
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

module.exports = modalGift;