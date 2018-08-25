var btn = document.querySelector('.btn');

function animate(draw, duration) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // определить, сколько прошло времени с начала анимации
    let timePassed = time - start;

    // возможно небольшое превышение времени, в этом случае зафиксировать конец
    if (timePassed > duration) timePassed = duration;

    // нарисовать состояние анимации в момент timePassed
    draw(timePassed);

    // если время анимации не закончилось - запланировать ещё кадр
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}

btn.addEventListener('click', () => {
	animate(function(timePassed) {
		let btnHeight = 70;
		    id = setInterval(frame, 10);

		function frame() {
			if (btnHeight == 10) {
				clearInterval(id);
				btn.remove();
			} else {
				btnHeight--;
				btn.style.height = btnHeight + 'px';
				console.log(btn.clientHeight);
				
			}
		}
	});
});