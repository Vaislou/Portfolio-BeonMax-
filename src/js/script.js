const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});