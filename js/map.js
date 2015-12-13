						ymaps.ready(function () {
						var myMap = new ymaps.Map('map', {
										center: [59.93866675783276,30.32307250000002], //координаты карты
										zoom: 16 //приближение карты
								}),
								myPlacemark = new ymaps.Placemark([59.938112257845596,30.32360894180299],
									 {
										hintContent: 'Nёrds'
								}, {
										iconLayout: 'default#image',
										iconImageHref: '../img/map-marker.svg', //  путь до картинки
										iconImageSize: [35, 35], //размер картинки
								});

						myMap.geoObjects.add(myPlacemark);
				});
