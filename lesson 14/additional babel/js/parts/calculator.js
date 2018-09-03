function calculator() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personsSum = 0,
	    daysSum = 0,
	    total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function() {
	 let personsValue = persons.value;
	 personsSum = +this.value;
	 total = (daysSum + personsSum) * 4000;


	 if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
	 	totalValue.innerHTML = 0;
	 } else if (persons.value % 1 !== 0) {
	 	persons.value = Math.floor(persons.value);
	 } else {
	 	getSelect();
	 }

	 if (persons.value == '') {
	 	persons.value = '';
	 }

	});

	restDays.addEventListener('input', function() {
	 daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
			totalValue.innerHTML = 0;
		} else if (restDays.value % 1 !== 0) {
			restDays.value = Math.floor(restDays.value);
		} else {
			getSelect();
		}

		if (restDays.value == '') {
			restDays.value = '';
		}

	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
 		totalValue.innerHTML = 0;
		} else {
			getSelect();
		}

	});

	function getSelect() {
		let x = total;
		totalValue.innerHTML = x * place.options[place.selectedIndex].value;
	}
}

module.exports = calculator;