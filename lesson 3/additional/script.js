let str = 'урок-3-был слишком легким';
let arr = [20, 33, 1, 'Человек', 2, 3];

str = str[0].toUpperCase() + str.substring(1);

str = str.replace(/\-/g, ' ')

str = str.substring(19, 26);

str = str.replace(/..$/, 'о');

console.log(str);

let y = [];
for (let i = 0; i < arr.length; i++) {
	y.push(Math.pow(arr[i], 3));
}

let sum = 0;
for(var i = 0; i < arr.length; i++){
 sum = sum + parseInt(y[i]);

}

console.log(Math.sqrt(sum));

function isArgument (x) {
	if (typeof(x) != 'string') {
		alert('Это не строка!');
	}
	x = x.trim();
	
	if (x.length > 50) {
		let re = x.substring(50);
		let newStr = x.replace(re, '...');
		alert(newStr);
	}
}
isArgument(' lol 5555555555555555555555555555555555555555555555333333333333');

