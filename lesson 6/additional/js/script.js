// Получаем кнопку "Открыть магазин" через id
let openBtn = document.getElementById('open-btn');

// Получаем все поля в левом меню через классы
let name = document.getElementsByClassName('name-value')[0],
    budget = document.getElementsByClassName('budget-value')[0],
    goods = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    personal = document.getElementsByClassName('employers-value')[0],
    discount = document.getElementsByClassName('discount-value')[0],
    isOpen = document.getElementsByClassName('isopen-value')[0];

// Получаем поля категорий товаров через класс
let goodsItem = document.getElementsByClassName('goods-item');

// Получаем все 3 кнопки через Tag
let functions = document.getElementsByClassName('main-functions');
let goodsBtn = functions[0].getElementsByTagName('button')[0],
    budgetBtn = functions[0].getElementsByTagName('button')[1],
    employersBtn = functions[0].getElementsByTagName('button')[2];

// Получаем поля ввода товаров, времени и расчета бюджета через
// querySelector
let inputGoods = document.querySelector('.choose-item'),
    inputTime = document.querySelector('.time-value'),
    inputBudget = document.querySelector('.count-budget-value');

// Получить поля имен сотрудников через querySelectorAll
let employers = document.querySelectorAll('.hire-employers-item');

let money;

mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
};

openBtn.addEventListener('click', () => {
    money = prompt('Ваш бюджет?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    budget.textContent = money;

    name.textContent = prompt('Название вашего магазина?', '').toUpperCase();


});

goodsBtn.addEventListener('click', () => {
    for (let i = 0; i < goodsItem.length; i++) {
     let a = goodsItem[i].value;

     if (typeof(a) === 'string') {
         console.log('Все верно!');
         mainList.shopGoods[i] = a;
         goods.textContent = mainList.shopGoods;
     } else {
         i--;
         alert('Вы не выбрали товары!');
     }
    }
});

inputGoods.addEventListener('change', () => {
    let items = inputGoods.value;

    if (isNaN(items) && items != '') {
     mainList.shopItems = items.split(',');
     mainList.shopItems.sort();
    }
    else {
     alert('Не верный тип данных')
    }

    items_value.textContent = mainList.shopItems;

    console.log(mainList.shopItems);
});

inputTime.addEventListener('change', () => {
    let time = inputTime.value;

    if (time < 0) {
     console.log('Такого не может быть!');
     mainList.open = false;
    } else if (time > 8 && time < 20) {
     console.log('Открыто!');
     mainList.open = true;
    } else if (time < 24) {
     console.log('Закрыто')
     mainList.open = false;
    } else {
     console.log('В Сутках только 24 часа!');
     mainList.open = false;
    }

    if (mainList.open == true) {
        isOpen.style.backgroundColor = 'green';
    } else {
        isOpen.style.backgroundColor = 'red';
    }

    if (mainList.open == true) {
     btnCondition(false);
    }

});

inputBudget.readOnly = true;

budgetBtn.addEventListener('click', () => {
    inputBudget.value = money / 30;
    console.log(inputBudget);
});

employersBtn.addEventListener('click', () => {
    // Очищаем поле с сотрудниками при каждом клике
    personal.textContent = '';
    for (let i = 0; i < employers.length; i++) {
     let employerName = employers[i].value;
     mainList.employers[i] = employerName;

     personal.textContent += mainList.employers[i] + ', ';
    }
});

discount.textContent = 'Узнать размер скидки';
discount.addEventListener('click', () => {
    discount.textContent = 'Ваша скидка: ' +Math.floor(Math.random() * 30) + '%';
    discount.style.backgroundColor = 'green';
});

function btnCondition(prop) {
    goodsBtn.disabled = prop;
    budgetBtn.disabled = prop;
    employersBtn.disabled = prop;
}

btnCondition(true);

function rusLetters(employer) {
    employer.addEventListener('input', () => {
        // Присваиваем введенные в input данные в переменную
        let inputProp = employer.value;
        // Сравниваем значение переменной с кириллицей и дополнительно с пробельным символом,
        // чтобы не выдавал ошибку при вводе пробела
        if (inputProp.match(/\s$/) == null && inputProp.match(/[а-я]$/ig) == null) {
            alert('Только кириллица');
            // При использовании не кириллицы и не пробела - очищаем input
            employer.value = '';
        }
    });
}

rusLetters(employers_1);
rusLetters(employers_2);
rusLetters(employers_3);

// Дополнительный скрипт к ДЗ
let titles = document.getElementById('titles');
titles.hidden = true;
let darkBtn;
let darkSide = confirm('Перейти на темную сторону?');
if (darkSide == true) {
    // Удаляем старые стили
    let lightLink = document.getElementsByTagName('link')[0];
    lightLink.remove();
    let darkLink = document.createElement('link');
    // Создаем тег link и добавляем в него ссылку на новые стили
    document.body.appendChild(darkLink);
    darkLink.setAttribute('rel', 'stylesheet');
    darkLink.setAttribute('href', 'css/main.css');
    // Добавили заголовок H1
    let darkHeader = document.createElement('h1')
    darkHeader.innerHTML = 'Добро пожаловать на темную сторону';
    darkHeader.classList.add('header-h1');
    main.appendChild(darkHeader);
    // Меняем текст кнопки
    let planet = document.getElementById('open-btn')
    planet.textContent = 'Открыть темный магазин';
    // Добавляем новую кнопку
    darkBtn = document.createElement('button')
    darkBtn.classList.add('dark-btn');
    darkBtn.innerHTML = 'Активировать';
    document.body.appendChild(darkBtn);

    let titlesBtn = document.getElementsByClassName('dark-btn')[0];

titlesBtn.addEventListener('click', () => {
    let hiddenDiv = document.getElementsByClassName('hide-div')[0];
    if (name.textContent != '' && budget.textContent != '' 
    && goods.textContent != '' && items_value.textContent != '' 
    && personal.textContent != '') {
        textShop.textContent = name.textContent;
        textMoney.textContent = budget.textContent;
        textGoods.textContent = goods.textContent;
        textItem.textContent = items_value.textContent;
        textPersonal.textContent = personal.textContent;
        hiddenDiv.hidden = true;
        titles.hidden = false;
        darkBtn.remove();
    } else {
        alert('Заполните все поля!')
    }
        
});
}



