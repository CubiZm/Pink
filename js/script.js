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


//plus-minus block

(function() {
	var elements = document.querySelectorAll(".plus-minus");

	for (var i = 0; i < elements.length; i++) {
	initNumberField(elements[i]);
	}

function initNumberField(parent) {
	var input = parent.querySelector("input");
	var minus = parent.querySelector(".js-minus");
	var plus = parent.querySelector(".js-plus");

	minus.addEventListener("click", function() {
		changeNumber(false);
	});

	plus.addEventListener("click", function() {
	changeNumber(true);
	});

function changeNumber(operation) {
	var value = Number(input.value);
		if (isNaN(value)) {
			value = 0;
	}
		if (operation) {
			input.value = value + 1;
	} else {
			input.value = value - 1;
			}
		}
	}
}
)();

//table

// var flkty = new Flickity('.wrapper');
// flkty.next();
// flkty.select( 3 );

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
