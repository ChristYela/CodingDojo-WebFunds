//Siempre hambriento
//Escribe una función a la que se le asigne un arreglo, y cada vez que el valor 
//sea "comida" debería mostrar "delicioso"en la consola. 
// Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.
function siempreHambriento(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("Tengo hambre")
    }
}
    siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso", "delicioso"
    siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"



// Filtro paso alto
//Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff. 
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
    var result2 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
     console.log(result2); // esperamos de vuelta [6, 8, 10, 9]



//Mejor que el promedio
//Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio. 
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
    var result3 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
     console.log(result3); // esperamos de vuelta 4


//Arreglo invertido
//Escribe una función que invierta los valores de un arreglo y los devuelva.
function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

    var result4 = reverse(["a", "b", "c", "d", "e"]);
    console.log(result4); // esperamos de vuelta ["e", "d", "c", "b", "a"]


// Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n.   
// Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. 
// Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
    var result5 = fibonacciArray(10);
    console.log(result5); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
