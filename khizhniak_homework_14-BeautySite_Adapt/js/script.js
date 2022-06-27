$(document).ready(function () {

	$("#callBurger").on('click', function () {
		$('#burger').toggleClass('show');
		$('body').toggleClass('fixed');
		event.preventDefault();
	});

	$("#close").on('click', function () {
		$('#burger').toggleClass('show');
		$('body').toggleClass('fixed');
		event.preventDefault();
	});

});

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.burger');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


