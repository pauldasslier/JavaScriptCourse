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




/*Итак, вы хотите получить вторую цифру от десятичной записи числа.

Простейшим и наиболее логичным решением является преобразование его в строку:

var digit = (''+myVar)[1];
или

var digit = myVar.toString()[1];

 
Если вы не хотите делать это легко, или если вы хотите более эффективное решение, вы можете сделать это:

var l = Math.pow(10, Math.floor(Math.log(myVar)/Math.log(10))-1);
var b = Math.floor(myVar/l);
var digit = b-Math.floor(b/10)*10;
Демонстрация*/

// Для людей, заинтересованных в выступлениях, я сделал jsperf. Для случайных чисел с использованием журнала, как и я, безусловно, является самым быстрым решением.
