$(document).ready(function () {
	$("#callModal").on('click', function () {
		$('#modal').toggleClass('show');
		event.preventDefault();
	});

	$("#close").on('click', function () {
		$('#modal').toggleClass('show');
		event.preventDefault();
	});

});


