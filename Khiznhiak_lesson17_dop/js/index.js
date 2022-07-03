
let imageGal = document.getElementById('image');
imageGal.hidden = true;
document.addEventListener('keyup', function () {
	console.log(document.getElementById('name').value);
	const regex = new RegExp('^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\']{2,20}$');
	if (regex.test(document.getElementById('name').value)) {
		console.log('введено имя');
		imageGal.hidden = false;
	} else {
		console.log('введены запрещенные символы');
		imageGal.hidden = true;
	}
});








