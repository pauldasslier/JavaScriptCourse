let age = document.getElementById('age');


 
function showUser(surname, name) {
	        this.name = name;
	        this.surname = surname;
	        this.age = age.value;
	        this.message = function() {
	        	alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
	        }
         console.log(this.age);
}
 
let john = new showUser('Сноу', 'Джон');

john.message();