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
				})
		};

})();
