//close modal window in form-page

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
