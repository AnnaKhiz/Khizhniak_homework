const imageGal = document.getElementById('image');
imageGal.hidden = true;
let enteredData;


document.addEventListener('keyup', function () {
	console.log(document.getElementById('passport').value);
	getData();
});

function sendData() {
	enteredData = document.getElementById('passport').value;
	getData();
	console.log(enteredData);
	return enteredData
}

function getData() {
	enteredData = document.getElementById('passport').value;
	const regPasOld = new RegExp('^[А-Яа-яёЁЇїІіЄєҐґ]{2}[0-9]{6}$');
	const regPasNew = new RegExp('^[0-9]{9}$');
	if ((regPasOld.test(enteredData)) || (regPasNew.test(enteredData))) {
		console.log('данные паспорта введены верно');
		imageGal.hidden = false;
	} else {
		console.log('данные паспорта введены НЕ верно');
		imageGal.hidden = true;
	}
}