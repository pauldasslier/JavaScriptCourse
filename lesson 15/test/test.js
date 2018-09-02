function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

console.log(sum());

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];



var each = function(startArr, f){return f(startArr)};
arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

let eachArray = each(arr, myFunc);

let assert = require('chai').assert;

describe('sum', function() {
	it('Сумма должна быть true', function() {
		assert.equal(sum(9,2), true);
	});
});

describe('num', function() {
	it('Переменная num должна быть равна 5', function() {
		assert.equal(num, 5);
	});
});

describe('eachArray', function() {
	it('Проверяем eachArray на тип, длину и соответствие результату', function() {
		assert.typeOf(eachArray, 'array');
		assert.lengthOf(eachArray, 5);
		assert.equal(eachArray[0], 8);
		assert.equal(eachArray[1], 7);
		assert.equal(eachArray[2], 6);
		assert.equal(eachArray[3], 5);
		assert.equal(eachArray[4], 4);
	});
});