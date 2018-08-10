var week = [
'monday',
'tuesday',
'wednesday',
'thursday',
'friday',
'saturday',
'sunday'
]

var date = new Date();
var currentDay = date.getDay();

for (var i = 0; i < week.length; i++) {
	if (i == currentDay - 1) {
		document.write('<i>' + week[i] + '</i>' + '<br>');
	} else if (i <= 4) {
		document.write(week[i] + '<br>');
	} else if (i >= 5) {
		document.write('<b>' + week[i] + '</b>' + '<br>');
	}
}

console.log(i);