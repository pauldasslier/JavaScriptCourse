var num = 33721;
var sum = 3 * 3 * 7 * 2 * 1;

console.log(sum);

for ( var i = 0; i < 2; i++) {
	sum *= 126;
}

alert(sum);

// Второй способ

var second = 126
Math.pow(second, 3);

console.log(Math.pow(second, 3));