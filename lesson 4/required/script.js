let money,
    name,
    day,
    time,
    price;

function start() {
	money = prompt('Ваш бюджет на месяц?', '');

 while (isNaN(money) || money == '' || money == null) {
 	money = prompt('Бюджет может быть только числом!', '');
 }

	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 21;
}

start();

mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	              for (let i = 0; i < 3; i++) {
		              let a = prompt('Какой тип товаров будем продавать?', '');

		             if (typeof(a) === 'string' && a !== '') {
			             console.log('Все верно!');
		              mainList.shopGoods[i] = a;
		             } else {
			             i--;
			             alert('Вы не выбрали товары!');
		             }
	             }
             },
 isOpen: function isOpen(time) {
	         if (time < 0) {
		         console.log('Такого не может быть!');
	         } else if (time > 8 && time < 20) {
		         console.log('Открыто!');
		         mainList.open = true;
	         } else if (time < 24) {
	         	console.log('Закрыто')
	         } else {
	         	console.log('В Сутках только 24 часа!');
	         }
         },
 howMuchMoney: function howMuchMoney() {
	               day = mainList.budget / 30;
	               alert(day);
               },
 isDiscount: function isDiscount() {
             	price = 10000;
             	if (mainList.discount) {
             		price = price * 0.8;
             	}
             	console.log(price);
             },
 isRecruitment: function isRecruitment() {

	                for (let i = 1; i < 5; i++) {
	                	let x = prompt('Ваше имя?', '');
	                	mainList.employers[i] = x;
	                }
                },
 chooseShopItems: function chooseShopItems() {
 	let items = prompt('Перечислите через запятую ваши товары', '');
 	if (typeof(items) == 'string' && items !== '') {
 		mainList.shopItems = items.split(',');
 		mainList.shopItems.push(prompt('Подождите, еще ', ''));
 		mainList.shopItems.sort();
 	}
 	else {
 		alert('Не верный тип данных')
 	}
 	console.log(mainList.shopItems);

 	mainList.shopItems.forEach(function(item, i, arr) {
 		alert("У нас вы можете купить: " + ++i + ') ' + item);
 	});
 }
};

console.log(mainList);

for(let key in mainList) {
	console.log('Наш магазин включает в себя: ' + key + ' со значением ' + mainList[key])
}