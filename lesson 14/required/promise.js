let message = new Object(),
    statusMessage = document.createElement('div'),
    statusMessage.classList.add('status'),
    form = document.getElementsByClassName('main-form')[0],
    modalInput = form.getElementsByTagName('input'),
    contactForm = document.getElementsByClassName('contact-form')[0],
    contactInput = contactForm.getElementsByTagName('input');

message.loading = 'Загрузка...';
message.success = 'Спасибо, скоро мы с вами свяжемся';
message.failure = 'Что-то пошло не так';

let sendForm = function(formType, formInput) {
  formType.addEventListener('submit', function(event) {
  event.preventDefault();
  formType.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open('POST', 'server.php');

  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  let formData = new FormData(formType);

  request.send(formData);

  request.onreadystatechange = function() {
    let promise = new Promise(function(resolve, reject) {
      if (request.readyState < 4) {
        resolve();
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          resolve();
        } else {
          reject();
        }
      }
    });

    promise
         .then( () => statusMessage.innerHTML = message.loading)
         .then( () => statusMessage.innerHTML = message.success)
         .catch( () => statusMessage.innerHTML = message.failure)
         .then(clearInput)
  }

  function clearInput() {
    for (let i = 0; i < formInput.length; i++) {
      formInput[i].value = '';
    }
  }
 });
}
sendForm(form, modalInput);
sendForm(contactForm, contactInput);