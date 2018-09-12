function modalTime() {
	let modalForm = document.querySelector('.popup-consultation'),
	    designForm = document.querySelector('.popup-design'),
	    giftForm = document.querySelector('.popup-gift'),
	    minute = 60000;

	// Запускаем интервал с проверкой раз в 1 сек. для получения времени пребывания на странице
	let timerId = setInterval(function() {
		 // При превышении времени на странице в 60к миллисекунд - выводим модальное окно
	  if (performance.now() > minute ) {
	  	if (designForm.style.display != 'block' && modalForm.style.display != 'block' && 
	  		giftForm.style.display != 'block') {
	  		modalForm.style.display = 'block';
	  	}
	  }
	}, 1000);

 // Очищаем интревал через 40 миллисекунд, чтобы пользователь не вызвал
 // 2ое модальное окно подряд и для освобождения памяти
	setTimeout(function() {
	  clearInterval(timerId);
	}, 60040);

}
module.exports = modalTime;