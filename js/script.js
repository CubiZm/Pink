//menu

var parent = document.querySelector(".main-header__section");
var toggle = document.querySelector(".main-menu__btn");

parent.classList.add('js-menu');

toggle.addEventListener("click", function(event) {
	event.preventDefault();
parent.classList.toggle('js-menu--open');
toogle.classList.add('js-menu--close');
});
console.log(toggle);


var close_btn = document.querySelectorAll('.pop-up .pop-up__btn');

	for (var i = 0; i < close_btn.length; i++) {
		var close_btns = close_btn[i];

		close_btns.onclick = function() {
			var el = this.parentNode;
			el.parentNode.removeChild(el);
		};
	}


//plus-minus block

(function() {
	var time = document.querySelector(".js-time");
	var companions = document.querySelector(".js-companions");

	foo(time, "10");
	foo(companions, "2");

	function foo(group, initVal) {
		var minus = group.querySelector(".js-minus");
		var plus = group.querySelector(".js-plus");
		var amount = group.querySelector("[type=text]");

		amount.value = initVal;

		minus.addEventListener("click", function(event) {
			event.preventDefault();
			if (amount.value > 0) {
				amount.value--;
			};
		});

		plus.addEventListener("click", function(event) {
			event.preventDefault();
			amount.value++;
		});
	};
})();

//table

var flkty = new Flickity( '.main-gallery', {
	// Настройки плагина
	cellAlign: 'left',
	contain: true,
	cellSelector: '.gallery-cell',
	setGallerySize: true
});


//table off

// var elem = document.querySelector('.wrapper');
// var flkty  new Flickity('.price-table');
// function sliderOn(){
// 	 flkty = new Flickity( elem, {
// 			// options
// 			cellAlign: 'left',
// 			contain: true,
// 			prevNextButtons: false,
// 			cellSelector: '.price-table',
// 			initialIndex: 2
// 	});

// }

// function sliderOff(){

// 	return flkty.destroy();
// }

// if (window.innerWidth < 659){
// 	sliderOn();
// } else {
// 	sliderOff();
// }
