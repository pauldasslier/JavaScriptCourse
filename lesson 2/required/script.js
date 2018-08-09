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

//Второй вариант, здесь if не актуален, т.к. запись идет сразу в объект

/*for (i = 0; i < 3; i++) {
	myGoods.push( prompt('Какой тип товаров будем продавать?') );
}

mainList.shopGoods = myGoods;*/


// Третий вариант

/*for (i = 0; i < 3; i++) {

	myGoods[i] = prompt('Какой тип товаров будем продавать?');
	if (typeof(myGoods[i]) === 'string' && myGoods[i] !== '') {
		console.log('Все верно!');
	} else {
		i--;
		alert('Вы не выбрали товары!');
	}
}

mainList.shopGoods = myGoods;*/

console.log(mainList);

var day = mainList.budget / 30;
alert(day);


