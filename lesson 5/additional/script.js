let now = new Date;

function formatDate() {
	let year = now.getFullYear(),
	    month = now.getMonth() + 1,
	    date = now.getDate(),
	    hours = now.getHours(),
	    minutes = now.getMinutes(),
	    seconds = now.getSeconds();

	if (month < 10) {
		month = '0' + month;
	} else if (date < 10) {
		date = '0' + date;
	}
	console.log(date);
}

formatDate();