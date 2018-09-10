function loadImg() {
	let loadBtn = document.querySelector('.button-styles'),
	    hiddenStyles = document.getElementsByClassName('styles-2');

	loadBtn.addEventListener('click', function() {
		for(let i = 0; i < hiddenStyles.length; i++) {
			if (hiddenStyles[i].classList.contains('styles-2')) {
				hiddenStyles[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
				hiddenStyles[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			}
		}
		this.remove(loadBtn);
	});
}

module.exports = loadImg;