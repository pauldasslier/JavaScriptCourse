let btn = document.querySelector('.btn');

// function animation() {
// 	let box = document.querySelector('.square'),
// 	    x = 0,
// 	    y = 0,
// 	    id = setInterval(frame, 10);

// 	    function frame() {
// 	    	if (y == 800 || x == 1160) {
// 	    		x--;
// 	    		box.style.top = y + 'px';
// 	    	 box.style.left = x + 'px';
// 	    	}
// 	    	else {
// 	    	x++;
// 	    	box.style.top = y + 'px';
// 	    	box.style.left = x + 'px';
// 	    }
// 	  } 
// }
function animation() {
	let x = btn.style.width,
	    y = btn.style.height;
	    // id = setInterval(frame, 10);
	    console.log(x);

	// function frame() {
	// 	if (x == 840) {
	// 		clearInterval(id);
	// 	} else {
	// 		x++;
	// 		btn.style.
	// 	}
	// }
}

btn.addEventListener('click', animation);