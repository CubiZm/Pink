//menu

var parent = document.querySelector(".main-header__section");
var toggle = document.querySelector(".main-menu__btn");
var logo = document.querySelector(".logo");

parent.classList.add('js-menu');

toggle.addEventListener("click", function(event) {
		event.preventDefault();
		parent.classList.toggle('js-menu--open');
		toggle.classList.toggle('btn__js-menu--close');
		logo.classList.toggle('logo__js-menu--close');

});
console.log(toggle);


// var close_btn = document.querySelectorAll('.pop-up .pop-up__btn');

// for (var i = 0; i < close_btn.length; i++) {
// 		var close_btns = close_btn[i];

// 		close_btns.onclick = function() {
// 				var el = this.parentNode;
// 				el.parentNode.removeChild(el);
// 		};
// }

var open = document.querySelector('.form__btn');
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up__btn");
open.addEventListener("click", function() {
	event.preventDefault();
	popup.classList.add("js-menu-open");
	popup.classList.remove("js-close");
	console.log("клик по кнопке");
});
close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("js-menu-open");
popup.classList.add("js-close");
});




// //table

var tableSlider = document.querySelector('.main-gallery');
var flkty = new Flickity(tableSlider, {
		// Настройки плагина
		cellAlign: 'left',
		contain: true,
		cellSelector: '.gallery-cell',
		setGallerySize: true
});

//table off

var elem = document.querySelector('.wrapper');
var flkty = new Flickity('.price-table');

function sliderOn() {
		flkty = new Flickity(elem, {
				// options
				cellAlign: 'left',
				contain: true,
				prevNextButtons: false,
				cellSelector: '.price-table',
				initialIndex: 3
		});

}

function sliderOff() {

		return flkty.destroy();
}

if (window.innerWidth < 320) {
		sliderOn();
} else {
		sliderOff();
}
