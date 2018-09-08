function loadImg() {
	let loadBtn = document.querySelector('.button-styles'),
	    hiddenStyles = document.getElementsByClassName('styles-2');

	loadBtn.addEventListener('click', function() {
		for(let i = 0; i < hiddenStyles.length; i++) {
			hiddenStyles[i].style.setProperty ('display', 'block', 'important');
		}
		this.remove(loadBtn);
	})
}

module.exports = loadImg;