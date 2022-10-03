console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");
var locationSpan = document.querySelector('#location');
var image = document.querySelector('.avatar-m');

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    username.innerText = "Cristian Andrés Yela";
    locationSpan.innerText = "Medellín - Colombia";
    image.src = "images/cristian_y.jpg";
        }
