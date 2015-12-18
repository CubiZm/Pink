(function() {

	if (!("FormData" in window)) {
return;
}

var elements = document.querySelectorAll(".form input[type=text]");
var qs = "";
for (var i = 0; i < elements.length; i++) {
var element = elements[i];
var name = element.name;
var value = element.value;
qs = qs + encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
}
console.log(qs);

var form = document.querySelector(".form");
	form.addEventListener("submit", function(event) {
	event.preventDefault();
var data = new FormData(form);

var radio = document.querySelector("[name=os]:checked");
var value = radio.value;
console.log(value);

var last_name = document.querySelector("[name=last-name]");
var value2 = last_name.value;
console.log(value2);

var middle_name = document.querySelector("[name=middle-name]");
var value3 = middle_name.value;
console.log(value3);

var departure = document.querySelector("[name=departure-date]");
var value4 = departure.value;
console.log(value4);

var number = document.querySelector("[name=input-number]");
var value5 = number.value;
console.log(value5);

var return_date = document.querySelector("[name=return-date]");
var value6 = return_date.value;
console.log(value6);

var companion = document.querySelector("[name=input-companion]");
var value7 = companion.value;
console.log(value6);

var nickname = document.querySelector("[name=nickname]");
var value8 = nickname.value;
console.log(value8);

var checkbox = document.querySelectorAll("[type=checkbox]:checked");
var value9 = checkbox.value;
console.log(value9);

var upload_img = document.querySelectorAll("[type=upload-images-btn");
var value10 = upload_img.value;
console.log(value10);

//photo
(function() {
var form = document.querySelector(".form");
form.querySelector("#upload-images-btn").addEventListener("change", function() {
var files = this.files;
for (var i = 0; i < files.length; i++) {
preview(files[i]);
}
});
function preview(file) {
if (file.type.match(/image.*/)) {
var reader = new FileReader();
reader.addEventListener("load", function(event) {
console.log(event.target.result);
});
reader.readAsDataURL(file);
}
}
})();

function preview(file) {
var area = document.querySelector(".photo-action__photo-preview");
if (file.type.match(/image.*/)) {
var reader = new FileReader();
reader.addEventListener("load", function(event) {
	var img = document.createElement("img");
	img.src = event.target.result;
	img.alt = file.name;
area.appendChild(img);
});
reader.readAsDataURL(file);
}
}

var xhr = new XMLHttpRequest();
xhr.open("get", "https://echo.htmlacademy.ru/adaptive?" + (new Date()).getTime());

xhr.addEventListener("readystatechange", function() {
if (xhr.readyState == 4) {
	button.classList.add('js-menu-open');
	button.classList.remove('js-close');
	button.show = '.pop-up__succes';
console.log(xhr.responseText);
	}
});
xhr.send(data);
});
})();
