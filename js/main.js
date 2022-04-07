// const hidden = document.querySelectorAll(".hidden")
const menuBurger = document.querySelector('.menu__burger')
const headerMenu = document.querySelector('.header-menu__list')
const wrapper = document.querySelector('.wrapper')

if (screen.width < 991) {
	headerMenu.classList.add('opacity')
	headerMenu.classList.add('hidden')
} else {
	headerMenu.classList.remove('opacity')
}

menuBurger.onclick = function () {
	if (headerMenu.classList.contains('opacity')) {
		console.log('!')
		this.classList.add('animation')
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
		wrapper.classList.add('stop')
	} else {
		console.log('!!')
		this.classList.remove('animation')
		headerMenu.classList.add('opacity')
		setTimeout(() => {
			headerMenu.classList.add('hidden')
		}, 200)
		// headerMenu.classList.add('hidden')
		wrapper.classList.remove('stop')
	}
}