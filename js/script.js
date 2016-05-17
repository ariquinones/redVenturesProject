function showMenu () {
	if(checkbox.checked) {
		document.querySelector('.languagesContainer').setAttribute('style', 'visibility: visible; opacity: 1; top: 3em');
	}
	else {
		document.querySelector('.languagesContainer').setAttribute('style', 'visibility: hidden; opacity: 0');
	}
}
var checkbox = document.querySelector('input[type=checkbox]')
checkbox.addEventListener('change', showMenu)
