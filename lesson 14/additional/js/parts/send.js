function send() {
	 let message = new Object();
	 message.loading = 'Загрузка...';
	 message.success = 'Спасибо, скоро мы с вами свяжемся';
	 message.failure = 'Что-то пошло не так';

	 // Блок для оповещения

	 let statusMessage = document.createElement('div');
	     statusMessage.classList.add('status');

	 // Модальная форма

	 let form = document.getElementsByClassName('main-form')[0],
	     modalInput = form.getElementsByTagName('input');

	 // Контактная форма

	 let contactForm = document.getElementsByClassName('contact-form')[0],
	     contactInput = contactForm.getElementsByTagName('input');

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
	     			statusMessage.innerHTML = message.loading;
	     		} else if (request.readyState === 4) {
	     			if (request.status == 200 && request.status < 300) {
	     				statusMessage.innerHTML = message.success;
	     				// Добавляем контент на страницу
	     			}
	     			else {
	     				statusMessage.innerHTML = message.failure;
	     			}
	     		}
	     	}

	     	for (let i = 0; i < formInput.length; i++) {
	     		// Очищаем поля ввода
	     		formInput[i].value = '';
	     	}
	     });
	 };

	 sendForm(form, modalInput);
	 sendForm(contactForm, contactInput);
}

module.exports = send;