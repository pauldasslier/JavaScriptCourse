var num = 33721;
var sum = 3 * 3 * 7 * 2 * 1;

console.log(sum);

for ( var i = 0; i < 2; i++) {
	sum *= 126;
}

first = ('' + sum)[0];
second = ('' + sum)[1];

amount = first + second;
alert(amount);

// Второй способ (его нужно раскомментировать и закомментировать первый)

/*var num = 33721;
var sum = 3 * 3 * 7 * 2 * 1;

console.log(sum);

Math.pow(sum, 3);

var cut = Math.pow(sum, 3);

one = ('' + cut)[0];
two = ('' + cut)[1];

amount = one + two;
alert(amount);*/
