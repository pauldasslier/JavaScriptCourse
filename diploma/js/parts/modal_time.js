function modalTime() {
	let modalForm = document.querySelector('.popup-consultation'),
	    designForm = document.querySelector('.popup-design'),
	    time = Math.floor(performance.now() / 1000);

	    console.log(time);

	// function showModal() {
	// 	if (designForm.style.display != 'block' && designForm.style.display == '') {
	// 		modalForm.style.display = 'block';
	// 	}
	// }

 // setTimeout(showModal, 5000)

}

module.exports = modalTime;