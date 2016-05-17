function showMenu () {
	if(checkbox.checked) {
		document.querySelector('.languagesContainer').setAttribute('style', 'visibility: visible; opacity: 1; -o-transform: translate(0,250px); -moz-transform: translate(0,250px); -webkit-transform: translate(0,250px)');
	}
	else {
		document.querySelector('.languagesContainer').setAttribute('style', 'visibility: hidden; opacity: 0');
	}
}
var checkbox = document.querySelector('input[type=checkbox]')
checkbox.addEventListener('change', showMenu)