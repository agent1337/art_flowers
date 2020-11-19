function showMenu() {
	event.stopPropagation();
	let menu = document.querySelector(".burger-menu");
	menu.classList.toggle("active");
}

function hideMenu() {
	let menu = document.querySelector(".burger-menu");
	if (menu.classList.contains('active')) {
		menu.classList.toggle("active");
	}
}
