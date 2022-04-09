const hidden = document.querySelectorAll(".hidden")
const menuBurger = document.querySelector('.menu__burger')
const headerMenu = document.querySelector('.header-menu__list')
const [popupLink] = document.querySelectorAll(".popup__link")
const [popupClose] = document.querySelectorAll(".popup__close")
const [popupArea] = document.querySelectorAll(".popup__area")
const [formSubmission] = document.querySelectorAll(".form__submission")
const popup = document.querySelector('.popup')
const body = document.querySelector('body')

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
		body.classList.add('lock-padding')
	} else {
		console.log('!!')
		this.classList.remove('animation')
		headerMenu.classList.add('opacity')
		setTimeout(() => {
			headerMenu.classList.add('hidden')
		}, 200)
		body.classList.remove('lock-padding')
	}
}

popupLink.onclick = function () {
	popup.classList.add('open')
	setTimeout(() => {
		body.classList.remove('lock-padding')
	}, 300)
	menuBurger.classList.remove('animation')
	headerMenu.classList.add('opacity')
	setTimeout(() => {
		headerMenu.classList.add('hidden')
	}, 200)
	// body.classList.remove('lock')
}
popupClose.onclick = function () {
	popup.classList.remove('open')
	setTimeout(() => {
		body.classList.remove('lock-padding')
	}, 300)
	if (screen.width > 991) {
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
	}
}
popupArea.onclick = function () {
	setTimeout(() => {
		body.classList.remove('lock-padding')
	}, 300)
	popup.classList.remove('open')
	if (screen.width > 991) {
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
	}

}
// formSubmission.onclick = function () {
// 	popup.classList.remove('open')
// 	setTimeout(() => {
// 		body.classList.remove('lock')
// 	}, 300)
// }