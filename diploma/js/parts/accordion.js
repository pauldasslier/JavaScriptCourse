function getAccordion() {
	let btnSpan = accordion.getElementsByTagName('span'),
	    blockAcc = accordion.getElementsByClassName('accordion-block');
	    
 for(let i = 0; i < btnSpan.length; i++) {
 	btnSpan[i].addEventListener('click', function() {
 		if(!(this.classList.contains('ui-accordion-header-active'))) {
 			for(let i = 0; i < btnSpan.length; i++) {
 				btnSpan[i].classList.remove('ui-accordion-header-active');
 				blockAcc[i].classList.remove('ui-accordion-content-active');
 			}
 			btnSpan[i].classList.add('ui-accordion-header-active');
 			blockAcc[i].classList.add('ui-accordion-content-active');
 		}
 	})
 }
}

module.exports = getAccordion;