

var boton = document.querySelector("likes1");
var connectionSpan = document.querySelector("#connections");

function suma_like(id) {
    var element = document.querySelector(id);
    connectionSpan.innerText++;
}

