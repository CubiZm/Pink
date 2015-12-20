(function() {

    if (!("FormData" in window)) {
        return;
    }

    var elements = document.querySelectorAll(".form input[type=text], form input:checked, .form input[type=number]");
    var qs = "";
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;
        qs = qs + encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
    }

    var form = document.querySelector(".form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = new FormData(form);

        //photo
        var queue = [];

        console.log(data)

        // (function() {
        //     var form = document.querySelector(".form");
        //     form.querySelector("#upload-images-btn").addEventListener("change", function() {
        //         var files = this.files;
        //         for (var i = 0; i < files.length; i++) {
        //             preview(files[i]);
        //         }
        //         this.value = "";
        //     });

        //     function preview(file) {
        //         if (file.type.match(/image.*/)) {
        //             var reader = new FileReader();
        //             reader.addEventListener("load", function(event) {
        //                 console.log(event.target.result);
        //             });
        //             reader.readAsDataURL(file);
        //         }
        //     }
        // })();

        // function preview(file) {
        //     var area = document.querySelector(".photo-action__photo-preview");
        //     var template = document.querySelector("#image-template").innerHTML;
        //     if (file.type.match(/image.*/)) {
        //         var reader = new FileReader();
        //         reader.addEventListener("load", function(event) {
        //             // var img = document.createElement("img");
        //             // img.src = event.target.result;
        //             // img.alt = file.name;
        //             // area.appendChild(img);
        //             // var html = template.replace("{{image}}", event.target.result);
        //             // .html = html.replace("{{name}}", file.name);
        //             var html = Mustache.render(template, {
        //                 "image": event.target.result,
        //                 "name": file.name
        //             });
        //             area.innerHTML = area.innerHTML + html;

        //             queue.push({
        //                 file: file,
        //                 img: img
        //             });
        //         });
        //         reader.readAsDataURL(file);
        //     }
        // }

        // queue.forEach(function(element) {
        //     data.append("images", element.file);
        // });

        // var xhr = new XMLHttpRequest();
        // xhr.open("get", "thankyou.html", "https://echo.htmlacademy.ru/adaptive?" + (new Date()).getTime());

        // xhr.addEventListener("readystatechange", function() {
        //     if (xhr.readyState == 4) {
        //         button.classList.add('js-menu-open');
        //         button.classList.remove('js-close');
        //         button.show = '.pop-up';
        //         console.log(xhr.responseText);
        //     }
        // });
        // xhr.send(data);
    });
})();
