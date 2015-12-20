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

