let x = [];
function getElementaryNumbers(start, end) {
	for(let i = start; i <= end; i++) {
	x[i] = []; 
		for(let j = 1; j <= i; j++) { 
			if (i % j == 0) { 
				x[i].push(j);
			}
		}
	}

	for(let k = start; k <= end; k++) {
		if (x[k].length == 2 ) {
			let y = x[k];
			console.log('Делители этого числа 1 и ' + y[1]);
		}
	}
}

getElementaryNumbers(1, 100);
