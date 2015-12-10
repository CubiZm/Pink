var parent = document.querySelector(".main-menu");
var toggle = document.querySelector(".main-menu__btn");

parent.classList.add('js-menu');

toggle.addEventListener("click", function(event) {
	event.preventDefault();
parent.classList.toggle('js-menu--open');
toogle.classList.add('js-menu--close');
});


console.log(toggle);
