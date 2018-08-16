let newLi = document.createElement('li'),
    menu = document.querySelector('.menu'),
    ad = document.querySelector('.adv'),
    question = prompt('Как вы относитесь к технике Apple?', 'Отлично'),
    answer = document.querySelector('.prompt');

// Меняем пункты местами и добавляем новый
menu.insertBefore(menu.children[2], menu.children[1]);
newLi.classList.add('menu-item');
newLi.textContent = 'Пятый Пункт';
menu.appendChild(newLi);

// Меняем фоновое изображение
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Меняем заголовок
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламу
ad.parentNode.removeChild(ad);

// Спрашиваем пользователя и выводим вопрос
answer.textContent = question;