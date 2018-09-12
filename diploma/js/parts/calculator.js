function getCalc() {
	let picSize = document.getElementById('size'),
	    picMaterial = document.getElementById('material'),
	    picOptions = document.getElementById('options'),
	    promoInput = document.querySelector('.promocode'),
	    totalValue = document.querySelector('.calc-price'),
	    content = 'Для расчета нужно выбрать размер картины и материал картины',
	    sizeSum = 0,
	    materialSum = 0,
	    optionsSum = 0,
	    promocode = 'IWANTPOPART';

	    function changeNaN() {
	    	if (totalValue.textContent == NaN) {
	    		totalValue.textContent = content;
	    	}
	    }


	    picSize.addEventListener('change', function() {
	    	sizeSum = picSize[this.selectedIndex].value;
	    	if (sizeSum != '' && materialSum != '') {
	    		totalValue.innerHTML = sizeSum * materialSum;
	    		getPromo();
	    	} else {
	    		totalValue.textContent = content;
	    		changeNaN();
	    	}
	    });

	    picMaterial.addEventListener('change', function() {
	    	materialSum = picMaterial[this.selectedIndex].value;
	    	if (sizeSum != '' && materialSum != '') {
	    		totalValue.innerHTML = sizeSum * materialSum;
	    		getPromo();
	    	} else {
	    		totalValue.textContent = content;
	    		changeNaN();
	    	}
	    });

	    picOptions.addEventListener('change', function() {
	    	optionsSum = picOptions[this.selectedIndex].value;
	    	if (sizeSum != '' && materialSum != '' && optionsSum != '') {
	    		totalValue.innerHTML = sizeSum * materialSum * optionsSum;
	    		getPromo();
	    	} else if (optionsSum == '') {
	    		totalValue.innerHTML = sizeSum * materialSum;
	    		getPromo();
	    	} else {
	    		totalValue.textContent = content;
	    		changeNaN();
	    	}
	    });

	    function getPromo() {
	    	if (promoInput.value == 'IWANTPOPART') {
	    			totalValue.innerHTML = totalValue.innerHTML * 0.7;
	    		}
	    	promoInput.addEventListener('change', function() {
	    		if (promoInput.value == 'IWANTPOPART') {
	    			totalValue.innerHTML = totalValue.innerHTML * 0.7;
	    		}
	    	});
	    }
}

module.exports = getCalc;