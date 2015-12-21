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


//table

var tableSlider = document.querySelector('.main-gallery');
if (tableSlider != null) {
		var tableRowHidden = tableSlider.querySelector('.price-table__invisible')
		if (tableSlider != null && window.innerWidth < 660) {
				var flkty = new Flickity(tableSlider, {
						// Настройки плагина
						cellSelector: '.gallery-cell'
				});
				flkty.remove(tableRowHidden)
		}
}

//maps
var ymaps;
if (ymaps != null) {
		ymaps.ready(function() {
				var myMap = new ymaps.Map('map', {
								center: [59.93866675783276, 30.32307250000002], //координаты карты
								zoom: 16 //приближение карты
						}),
						myPlacemark = new ymaps.Placemark([59.938112257845596, 30.32360894180299], {
								hintContent: 'Nёrds'
						}, {
								iconLayout: 'default#image',
								iconImageHref: '../img/map-marker.svg', //  путь до картинки
								iconImageSize: [35, 35], //размер картинки
						});

				myMap.geoObjects.add(myPlacemark);
		});
}


//plus-minus block

var time = document.querySelector(".js-time");
var companions = document.querySelector(".js-companions");

var list = document.querySelector(".numeral-inputs");
var template = document.querySelector("#companion-template").innerHTML;
var companionsAmount = document.querySelector("[name=input-number]");

var btnRemove = document.querySelectorAll(".btn--companions");

function addFuncRemove(btn) {
		btn.addEventListener("click", function(event) {
				event.preventDefault;
				companionsAmount.value--;
				var li = btn.parentNode;
				var list = li.parentNode;
				list.removeChild(li);
				changeNum();
		});
};

function changeNum() {
		var numbers = document.querySelectorAll(".numeral-inputs__item");
		for (var i = 0; i < numbers.length; i++) {
				var num = numbers[i];
				num.innerHTML = i + 1;
		};
};

function changeDuration(group, initVal) {
		var minus = group.querySelector(".js-minus");
		var plus = group.querySelector(".js-plus");
		var amount = group.querySelector("[type=number]");

		amount.value = initVal;
		setDate();

		minus.addEventListener("click", function(event) {
				event.preventDefault();
				if (amount.value > 0) {
						amount.value--;
						setDate()
				};
		});

		plus.addEventListener("click", function(event) {
				event.preventDefault();
				amount.value++;
				setDate()
		});
};

function changeAmount(group, initVal) {
		var minus = group.querySelector(".js-minus");
		var plus = group.querySelector(".js-plus");
		var amount = group.querySelector("[type=number]");

		amount.value = initVal;

		minus.addEventListener("click", function(event) {
				event.preventDefault();
				if (amount.value > 0) {
						amount.value--;
				};

				var item = document.querySelector(".numeral-inputs__item");

				list.removeChild(item);
		});

		plus.addEventListener("click", function(event) {
				event.preventDefault();
				amount.value++;

				var li = document.createElement("li");
				li.classList.add("numeral-inputs__item");
				li.innerHTML = Mustache.render(template, {
						"number-$": companionsAmount.value,
						"name-$": "name-" + companionsAmount.value,
						"nickname-$": "niсkname-" + companionsAmount.value
				});;
				list.appendChild(li);

				var btnRemove = li.querySelector(".btn--companions");
				btnRemove.addEventListener("click", function(event) {
						event.preventDefault;
						var list = li.parentNode;
						list.removeChild(li);
						amount.value--;
						// changeNum();
				});

		});
};

if (time != null && companions != null) {
		changeAmount(time, "10");
		changeAmount(companions, "0");
}


//close modal window in form-page

var open = document.querySelector('.form__btn');
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up__btn");

if (open != null && popup != null && close != null) {
		open.addEventListener("click", function() {
				popup.classList.add("js-menu-open");
				popup.classList.remove("js-close");
				console.log("клик по кнопке");
		});
		close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("js-menu-open");
				popup.classList.add("js-close");
		});
}


(function() {

		if (!("FormData" in window)) {
				return;
		}
		var form = document.querySelector(".form");
		if (form != null) {
				var elements = form.querySelectorAll(".form input[type=text], form input:checked, .form input[type=number]");
				var qs = "";


				for (var i = 0; i < elements.length; i++) {
						var element = elements[i];
						var name = element.name;
						var value = element.value;
						qs = qs + encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
				}

				function preview(file) {
						var area = document.querySelector(".photo-action__photo-preview");
						var template = document.querySelector("#image-template").innerHTML;
						if (file.type.match(/image.*/)) {
								var reader = new FileReader();
								reader.addEventListener("load", function(event) {
										var html = Mustache.render(template, {
												"image": event.target.result,
												"name": file.name
										});
										area.innerHTML = area.innerHTML + html;
								});
								reader.readAsDataURL(file);
						}
				}


				form.querySelector("#upload-images-btn").addEventListener("change", function() {
						var files = this.files;
						for (var i = 0; i < files.length; i++) {
								preview(files[i]);
						}
						this.value = "";
				});

				form.addEventListener("submit", function(event) {
						event.preventDefault();
						console.log('lol');
						var data = new FormData(form);



						var xhr = new XMLHttpRequest();
						xhr.open("get", "thankyou.html", "https://echo.htmlacademy.ru/adaptive?" + (new Date()).getTime());

						xhr.addEventListener("readystatechange", function() {
								if (xhr.readyState == 4) {
										button.classList.add('js-menu-open');
										button.classList.remove('js-close');
										button.show = '.pop-up';
										console.log(xhr.responseText);
								}
						});
						xhr.send(data);
				});

		}
})();
