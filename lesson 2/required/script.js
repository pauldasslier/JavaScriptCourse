var money = prompt('Ваш бюджет на месяц?');
var name = prompt('Название вашего магазина?');

mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: [],
	open: true
};

var myGoods = [];
var i;

for (i = 0; i < 3; i++) {
	var a = prompt('Какой тип товаров будем продавать?');

	if (typeof(a) === 'string' && a !== '') {
		console.log('Все верно!');
	 mainList.shopGoods[i] = a;
	} else {
		i--;
		alert('Вы не выбрали товары!');
	}
}


/*i = 0;
while (i < 3) {
 var a = prompt('Какой тип товаров будем продавать?');
 if (typeof(a) === 'string' && a !== '') {
		console.log('Все верно!');
	 mainList.shopGoods[i] = a;
	} else {
		i--;
		alert('Вы не выбрали товары!');
	}
	i++;
}*/

/*i = 0;
do {
	var a = prompt('Какой тип товаров будем продавать?');
 if (typeof(a) === 'string' && a !== '') {
		console.log('Все верно!');
	 mainList.shopGoods[i] = a;
	} else {
		i--;
		alert('Вы не выбрали товары!');
	}
	i++;
} while (i < 3);*/

console.log(mainList);

var day = mainList.budget / 30;
alert(day);


