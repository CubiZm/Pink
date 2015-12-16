var parent = document.querySelector(".main-header__section");
var toggle = document.querySelector(".main-menu__btn");

parent.classList.add('js-menu');

toggle.addEventListener("click", function(event) {
	event.preventDefault();
parent.classList.toggle('js-menu--open');
toogle.classList.add('js-menu--close');
});
console.log(toggle);



(function() {
 var elements = document.querySelectorAll(".plus-minus");
 for (var i = 0; i < elements.length; i++) {
 initNumberField(elements[i]);
 }
 function initNumberField(parent) {
 var input = parent.querySelector("input");
 var minus = parent.querySelector(".minus");
 var plus = parent.querySelector(".plus");
 minus.addEventListener("click", function() {
 changeNumber(false);

});
 plus.addEventListener("click", function() {
	 changeNumber(true);

	 });
 function changeNumber(operation) { var value = Number(input.value);
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

var elements = [1, 2, 3, 4, 5];
for (var i = 0; i < elements.length; i++) {
 timeout(elements[i]);
}
function timeout(element) {
 setTimeout(function() {
 console.log(element);
 }, 1000);
}
