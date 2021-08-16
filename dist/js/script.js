const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeBtn = document.querySelector('.menu__close'),
	  percents = document.querySelectorAll('.skills__progress-percent'),
	  fills = document.querySelectorAll('.skills__progress-bar_fill'),
	  links = document.querySelectorAll('.menu__link'),
	  pageUp = document.querySelector('.pageup');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
});

links.forEach((e, i) => {
	links[i].addEventListener('click', () => {
		menu.classList.toggle('active');
	})
})

percents.forEach((item, i) => {
	fills[i].style.width = item.innerHTML;
});

pageUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
})

window.addEventListener('scroll', () => {
	let windowY = window.scrollY;
	if (windowY > 1000) {
		pageUp.classList.remove('visible');
	} else {
		pageUp.classList.add('visible');
	}
});