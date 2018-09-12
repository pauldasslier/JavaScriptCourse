function getPictures() {
	let canvasBlock = document.querySelector('.sizes-wrapper'),
	    canvasDiv = document.getElementsByClassName('sizes-block'),
	    canvas = canvasBlock.getElementsByTagName('img'),
	    sizeXS = 'img/sizes-1.png',
	    sizeXSnew = 'img/sizes-1-1.png',
	    xsClass = 'size-1',
	    sizeS = 'img/sizes-2.png',
	    sizeSnew = 'img/sizes-2-1.png',
	    sClass = 'size-2',
	    sizeM = 'img/sizes-3.png',
	    sizeMnew = 'img/sizes-3-1.png',
	    mClass = 'size-3',
	    sizeL = 'img/sizes-4.png',
	    sizeLnew = 'img/sizes-4-1.png',
	    lClass = 'size-4';



	function getCanvas(def, hov, className) {
		for(let i = 0; i < canvasDiv.length; i++) {
			canvasDiv[i].addEventListener('mouseenter', function() {
				let paragraph = canvasDiv[i].getElementsByTagName('p');
				if (canvas[i].classList.contains(className)) {
					canvas[i].setAttribute('src', hov);
					for(let i = 0; i < paragraph.length; i++) {
						paragraph[i].style.display = 'none';
					};

				};
			});
			canvasDiv[i].addEventListener('mouseleave', function() {
				let paragraph = canvasDiv[i].getElementsByTagName('p');
				if (canvas[i].classList.contains(className)) {
					canvas[i].setAttribute('src', def);
					for(let i = 0; i < paragraph.length; i++) {
						paragraph[i].style.display = 'block';
					};

				}
			});

		};
	};

	getCanvas(sizeXS, sizeXSnew, xsClass);
	getCanvas(sizeS, sizeSnew, sClass);
	getCanvas(sizeM, sizeMnew, mClass);
	getCanvas(sizeL, sizeLnew, lClass);
}
getPictures()

module.exports = getPictures;