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
    employersBtn = functions[0].getElementsByTagName('button')[2],
    allBtn = functions[0].getElementsByTagName('button');

// Получаем поля ввода товаров, времени и расчета бюджета через
// querySelector
let inputGoods = document.querySelector('.choose-item'),
    inputTime = document.querySelector('.time-value'),
    inputBudget = document.querySelector('.count-budget-value');

// Получить поля имен сотрудников через querySelectorAll
let employers = document.querySelectorAll('.hire-employers-item');

let money,
    price;


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

});

goodsBtn.disabled = true;
budgetBtn.disabled = true;
employersBtn.disabled = true;


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
        goodsBtn.disabled = false;
        budgetBtn.disabled = false;
        employersBtn.disabled = false;
    } else {
        isOpen.style.backgroundColor = 'red';
    }

});

inputBudget.readOnly = true;

budgetBtn.addEventListener('click', () => {
    inputBudget.value = money / 30;
});

employersBtn.addEventListener('click', () => {
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

mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
};
