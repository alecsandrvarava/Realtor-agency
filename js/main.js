const hidden = document.querySelectorAll(".hidden")
const menuBurger = document.querySelector('.menu__burger')
const headerMenu = document.querySelector('.header-menu__list')
const popupLink = document.querySelectorAll(".popup__link")
const [popupClose] = document.querySelectorAll(".popup__close")
const [popupArea] = document.querySelectorAll(".popup__area")
const popup = document.querySelector('.popup')
const body = document.querySelector('body')
const formSubmission = document.getElementById('formSubmission')
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
		body.classList.add('lock')
	} else {
		console.log('!!')
		this.classList.remove('animation')
		headerMenu.classList.add('opacity')
		setTimeout(() => {
			headerMenu.classList.add('hidden')
		}, 200)
		body.classList.remove('lock')
	}
}

for (var i = 0; i < popupLink.length; i++) {
	popupLink[i].onclick = function () {
		if (screen.width > 991) {
			popup.classList.add('open')
			body.classList.add('lock')
			menuBurger.classList.remove('animation')
			headerMenu.classList.add('opacity')
			setTimeout(() => {
				headerMenu.classList.add('hidden')
			}, 200)
		} else {
			popup.classList.add('open')
			body.classList.add('lock-padding')
			menuBurger.classList.remove('animation')
			headerMenu.classList.add('opacity')
			setTimeout(() => {
				headerMenu.classList.add('hidden')
			}, 200)
		}
	};
}

// popupLink.onclick = function () {
// 	if (screen.width > 991) {
// 		popup.classList.add('open')
// 		body.classList.add('lock')
// 		menuBurger.classList.remove('animation')
// 		headerMenu.classList.add('opacity')
// 		setTimeout(() => {
// 			headerMenu.classList.add('hidden')
// 		}, 200)
// 	} else {
// 		popup.classList.add('open')
// 		body.classList.add('lock-padding')
// 		menuBurger.classList.remove('animation')
// 		headerMenu.classList.add('opacity')
// 		setTimeout(() => {
// 			headerMenu.classList.add('hidden')
// 		}, 200)
// 	}
// }

popupClose.onclick = function () {
	popup.classList.remove('open')
	body.classList.remove('lock')
	body.classList.remove('lock-padding')
	if (screen.width > 991) {
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
	}
}
popupArea.onclick = function () {
	body.classList.remove('lock')
	body.classList.remove('lock-padding')
	popup.classList.remove('open')
	if (screen.width > 991) {
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
	}

}
formSubmission.onclick = function () {
	popup.classList.remove('open')
	setTimeout(() => {
		body.classList.remove('lock')
	}, 300)
	if (screen.width > 991) {
		headerMenu.classList.remove('opacity')
		setTimeout(() => {
			headerMenu.classList.remove('hidden')
		}, 200)
	}
}

const arrow = document.querySelector('.apartments-dropdowns__arrow')
const numder = document.querySelector('.apartments-dropdowns__list')
const screenNumber = document.getElementById('list-scroll')
const scren = document.getElementById('scren')
const listScroll = document.querySelectorAll('.list-scroll')

const getNum = function () {
	scren.innerHTML = this.dataset.numb
	arrow.classList.remove('active')
	numder.classList.remove('number')
}
listScroll.forEach(function (itemNum) {
	itemNum.onclick = getNum
})
arrow.onclick = function () {
	arrow.classList.toggle('active')
	numder.classList.toggle('number')
	// body.classList.toggle('lock')
}






