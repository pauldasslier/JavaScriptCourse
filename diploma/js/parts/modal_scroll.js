function modalScroll() {
	function showModal() {
		let gift = document.querySelector('.fixed-gift'),
		    btnAll = document.getElementsByClassName('button'),
		    modalForm = document.querySelector('.popup-gift'),
		    eventClick = 0;

  // Функция отлавливания события клика по кнопкам
		function btnClick(prop) {
			for(let i = 0; i < prop.length; i++) {
				prop[i].onclick = function() {
					eventClick = 1;
				}
			}
		}

		btnClick(btnAll);

  // Отлавливаем событие прокрутки
  window.onscroll = function() {
   let scrolled = window.pageYOffset || document.documentElement.scrollTop;
   // Отлавливаем прокрутку до конца страницы
   if(scrolled > 11190) {
    function testEvent() {
    	if (document.querySelector('.fixed-gift') != null && eventClick != 1) {
    		modalForm.style.display = 'block';
    	 gift.remove();
    	}
    }
    testEvent();
   }
  }
	}

	showModal();

}

module.exports = modalScroll;