$(document).ready(function() {

	var tourBtn = $('.main_btna'),
	    consultBtn = $('.main_btn'),
	    overlay = $('.overlay'),
	    scheduleMenu = $('a:eq(8)'),
	    modal = $('.modal'),
	    close = $('.close')

	tourBtn.on('click', function() {
		toShow();
	});

 consultBtn.on('click', function() {
 	toShow();
 });
 
 scheduleMenu.on('click', function() {
 	toShow();
 });

 function toShow() {
 	event.preventDefault();
 	overlay.animate(
 	{
 		opacity: 'toggle'
 	}, 2000, function() {
 		modal.addClass('bounceInDown').css('display', 'block');
 	});
 };

 close.on('click', function() {
 	event.preventDefault();
 	modal.addClass('bounceOutUp');
 	overlay.animate(
 	{
 		opacity: 'toggle'
 	}, 2500);
 });



});