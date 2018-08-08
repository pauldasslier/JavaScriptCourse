var budget = prompt('Ваш бюджет на месяц?');
var shopName = prompt('Название вашего магазина?');

mainList = {
	budget: '',
	shopName: '',
	shopGoods: [],
	employers: [],
	open: true
};

var shopGoods = [];
var i;

for ( i = 0; i < 3; i++) {
	shopGoods.push( prompt('Какой тип товаров будем продавать?') );
}
alert(shopGoods);

mainList.budget = budget;
mainList.shopName = shopName;
mainList.shopGoods = shopGoods;

var day = budget / 30;
alert(day);