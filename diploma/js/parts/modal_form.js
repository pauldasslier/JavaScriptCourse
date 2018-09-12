function sendModalForm() {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так';

	let loadingMessage = document.getElementsByClassName('modal-loading')[0],
	    successMessage = document.getElementsByClassName('modal-success')[0],
	    failureMessage = document.getElementsByClassName('modal-failure')[0];

	// Блок для оповещения
	let statusMessage = document.createElement('div');
	    statusMessage.classList.add('status');

	// Модальная форма дизайн
	let designForm = document.getElementsByClassName('design-form')[0],
	    designInput = designForm.getElementsByTagName('input');

	// Модальная форма консультация
	let consultForm = document.getElementsByClassName('form')[1],
	    consultInput = consultForm.getElementsByTagName('input');

	// Форма в футере
	let footerForm = document.getElementById('footer-form'),
	    footerFormInput = footerForm.getElementsByTagName('input');

	let sendForm = function(formType, formInput) {
		formType.addEventListener('submit', function(event) {
	 event.preventDefault();
	 formType.appendChild(statusMessage);

	 // AJAX

	 let request = new XMLHttpRequest();
	 request.open('POST', 'server.php');

	 request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	 let formData = new FormData(formType);
	 request.send(formData);

	 request.onreadystatechange = function() {
	 	if (request.readyState < 4) {
	 		// statusMessage.innerHTML = message.loading;
	 			statusMessage.innerHTML = '<span class="modal-loading_text">Загрузка...</span><img src="img/ajax-loader.gif" class="modal-loading_img" alt="">';
	 	} else if (request.readyState === 4) {
	 		if (request.status == 200 && request.status < 300) {
	 			// statusMessage.innerHTML = message.success;
	 			statusMessage.innerHTML = '<span class="modal-success_text">Спасибо, скоро мы с вами свяжемся</span><img src="img/ok-mark.png" class="modal-success_img" alt="">'

	 			// Добавляем контент на страницу
	 		}
	 		else {
	 			// statusMessage.innerHTML = message.failure;
	 			statusMessage.innerHTML = '<span class="modal-success_text">Что-то пошло не так</span><img src="img/close-button.png" class="modal-failure_img" alt="">'

	 		}
	 	}
	 }

	 for (let i = 0; i < formInput.length; i++) {
	 	// Очищаем поля ввода
	 	formInput[i].value = '';
	 }
	});

	}
	sendForm(designForm, designInput);
	sendForm(consultForm, consultInput);
	sendForm(footerForm, footerFormInput);

	function rusLetters(employer) {
			 employer.addEventListener('input', () => {
	     // Присваиваем введенные в input данные в переменную
	     let inputProp = employer.value;
	     // Сравниваем значение переменной с кириллицей и дополнительно с пробельным символом,
	     // чтобы не выдавал ошибку при вводе пробела
	     if (inputProp.match(/\s$/) == null && inputProp.match(/[а-я]$/ig) == null) {
	         // При использовании не кириллицы и не пробела - очищаем input
	         employer.value = '';
	     }
	 });
	}

	let consultName = consultInput[0],
	    designName = designInput[1],
	    footerName = footerFormInput[0],
	    designArea = designForm.getElementsByTagName('textarea')[0],
	    footerQuestion = footerFormInput[3];

	rusLetters(consultName);
	rusLetters(designName);
	rusLetters(designArea);
	rusLetters(footerName);
	rusLetters(footerQuestion);

	let input = consultForm.getElementsByTagName('input')[1];
	input.addEventListener("input", mask, false);
	designInput[2].addEventListener("input", mask, false);
	footerFormInput[1].addEventListener("input", mask, false);

	function mask(event) {
	    let matrix = this.defaultValue,
	        i = 0,
	        def = matrix.replace(/\D/g, ''),
	        val = this.value.replace(/\D/g, '');
	        def.length >= val.length && (val = def);
	    matrix = matrix.replace(/[_\d]/g, function(a) {
	        return val.charAt(i++) || '_'
	    });
	    this.value = matrix;
	    i = matrix.lastIndexOf(val.substr(-1));
	    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf('_');
	    setCursorPosition(i, this)
	}
	
		function setCursorPosition(pos, elem) {
		  elem.focus();
		  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		  else if (elem.createTextRange) {
		      let range = elem.createTextRange();

		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select()
		  }
		}

};

module.exports = sendModalForm;


