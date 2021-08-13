const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeBtn = document.querySelector('.menu__close'),
	  percents = document.querySelectorAll('.skills__progress-percent'),
	  fills = document.querySelectorAll('.skills__progress-bar_fill');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});

percents.forEach((item, i) => {
	fills[i].style.width = item.innerHTML;
});