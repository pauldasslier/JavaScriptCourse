let x = []; 
function getFriendlyNumbers(start, end) { 
	if (start > end) {
		return false;
	} else if (start < 0 || end < 0) {
		return false;
	} else if ((start ^ 0) !== start || (end ^ 0) !== end) {
		return false;
	}

	for(let i = start; i <= end; i++) { 
		x[i] = 0; 
		for(let j = 1; j <= i; j++) { 
			if (i % j == 0 && i !== j) { 
				x[i] += j; 
			}
		}
	} 
	let y = []; 
	for(let k = start; k <= end; k++) { 
		if(k == x[x[k]] && x[k] > x[x[k]]){ 
			y.push([x[x[k]], x[k]]); 
		} 
	} 
	return y;
} 

let arFriendlyNumbers = getFriendlyNumbers(1000000, 10000); 
console.log(arFriendlyNumbers);

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}