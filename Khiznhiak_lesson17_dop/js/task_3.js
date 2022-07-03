const imageGal = document.getElementById('image');
imageGal.hidden = true;

document.addEventListener('keyup', function () {
	console.log(document.getElementById('passport').value);
	const regPasOld = new RegExp('^[А-Яа-яёЁЇїІіЄєҐґ]{2}[0-9]{6}$');
	const regPasNew = new RegExp('^[0-9]{9}$');
	let enteredValue = document.getElementById('passport').value;
	if ((regPasOld.test(enteredValue)) || (regPasNew.test(enteredValue))) {
		console.log('данные паспорта введены верно');
		imageGal.hidden = false;
	} else {
		console.log('данные паспорта введены не верно');
		imageGal.hidden = true;
	}
});

function sendData() {
	let enteredData = document.getElementById('passport').value;
	console.log(enteredData);
	const regPasOld = new RegExp('^[А-Яа-яёЁЇїІіЄєҐґ]{2}[0-9]{6}$');
	const regPasNew = new RegExp('^[0-9]{9}$');
	if (((regPasOld.test(enteredData)) || (regPasNew.test(enteredData)))) {
		console.log('данные паспорта введены верно');
		imageGal.hidden = false;
		alert('Данные паспорта введены верно');
	} else {
		console.log('данные паспорта введены НЕ верно');
		alert('Данные паспорта введены НЕ верно');
		imageGal.hidden = true;
	}
}
