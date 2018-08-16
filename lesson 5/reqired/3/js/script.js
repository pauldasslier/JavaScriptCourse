// Получаем кнопку "Открыть магазин" через id
let openBtn = document.getElementById('open-btn');
console.log(openBtn);

// Получаем все поля в левом меню через классы
let name = document.getElementsByClassName('name-value')[0],
    budget = document.getElementsByClassName('budget-value')[0],
    goods = document.getElementsByClassName('goods-value')[0],
    items = document.getElementsByClassName('items-value')[0],
    personal = document.getElementsByClassName('employers-value')[0],
    discount = document.getElementsByClassName('discount-value')[0],
    isopen = document.getElementsByClassName('isopen-value')[0];
console.log(name);

// Получаем поля категорий товаров через класс
let categoryFirst = document.getElementsByClassName('goods-item')[0],
    categorySecond = document.getElementsByClassName('goods-item')[0],
    categoryThird = document.getElementsByClassName('goods-item')[0],
    categoryFourер = document.getElementsByClassName('goods-item')[0];
console.log(categoryOne);


// Получаем все 3 кнопки через Tag
let functions = document.getElementsByClassName('main-functions');
let confirmBtn = functions[0].getElementsByTagName('button')[0],
    calcBtn = functions[0].getElementsByTagName('button')[1],
    budgetmBtn = functions[0].getElementsByTagName('button')[2];

console.log(confirmBtn);

// Получаем поля ввода товаров, времени и расчета бюджета через
// querySelector
let inputGoods = document.querySelector('.choose-item'),
    inputTime = document.querySelector('.time-value'),
    inputBudget = document.querySelector('.count-budget-value');

console.log(inputGoods);


// Получить поля имен сотрудников через querySelectorAll
let employerFirst = document.querySelectorAll('.hire-employers-item')[0],
    employerSecond = document.querySelectorAll('.hire-employers-item')[1],
    employersThird = document.querySelectorAll('.hire-employers-item')[2];

console.log(employerFirst);