//El horno de pizza
//Crea una functionllamada pizzaOven.  
//Debemos sentirnos libres de personalizar la información que registramos para nuestra pizza, 
//pero asegurémonos de incluir lo siguiente:  tipoCorteza, tipoSalsa, quesos,y salsas.

//Crea una función llamada pizzaOven que devuelva un objeto JavaScript (Pizza)
//Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]
//Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
//¡Crea 2 pizzas más con los ingredientes que quieras!


function pizzaOven(tipoCorteza, tipoSalsa, quesos, adiciones) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.adiciones = adiciones;
    return pizza;
}

var pizza1 = pizzaOven("Estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var tipoCorteza = [
    "Estilo Chicago",
    "lanzada a mano",
    "delgada y crujiente",
    "coliflor",
    "libre de gluten",
    "pan hawaiiano"
];

var tipoSalsa = [
    "tradicional",
    "marinara",
    "bbq",
    "salsa blanca",
    "queso de nacho",
    "tikka masala"
];

var quesos = [
    "mozzarella",
    "cheddar",
    "feta",
    "queso suizo",
    "queso azul",
    "queso de cabra",
    "queso provolone",
    "parmesano",
    "queso vegano"
];

var adiciones = [
    "pepperoni",
    "salchicha",
    "pollo",
    "maiz",
    "aceitunas",
    "pimientos",
    "cebollas",
    "champiñones",
    "anchoas"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.adiciones = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.adiciones.push(randomPick(adiciones));
    }
    return pizza;
}

console.log(randomPizza2());

function randomPizza2() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.adiciones = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.adiciones.push(randomPick(adiciones));
    }
    return pizza;
}

console.log(randomPizza2());