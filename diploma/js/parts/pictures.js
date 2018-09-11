function getPictures() {
	let canvasBlock = document.querySelector('.sizes-wrapper'),
	    canvasDiv = document.getElementsByClassName('sizes-block'),
	    canvas = canvasBlock.getElementsByTagName('img'),
	    sizeXS = 'img/sizes-1.png',
	    sizeXSnew = 'img/sizes-1-1.png';

	function getCanvas(def, hov, className) {
		for(let i = 0; i < canvasDiv.length; i++) {
			canvasDiv[i].addEventListener('mouseover', function() {
				if (canvas[i].classList.contains(className)) {
					canvas[i].setAttribute('src', hov);
				}
			});
			canvasDiv[i].addEventListener('mouseleave', function() {
				if (canvas[i].classList.contains(className)) {
					canvas[i].setAttribute('src', def);
				}
			});

		}
	}

	getCanvas('img/sizes-1.png', 'img/sizes-1-1.png', 'size-1');
	getCanvas('img/sizes-2.png', 'img/sizes-2-1.png', 'size-2');
	getCanvas('img/sizes-3.png', 'img/sizes-3-1.png', 'size-3');
	getCanvas('img/sizes-4.png', 'img/sizes-4-1.png', 'size-4');
}

module.exports = getPictures;