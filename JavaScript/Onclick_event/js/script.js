function click_on(){
    var boton = document.querySelector('#btn-def1');
    alert("Ninja was liked");
}

function click_on(){
    var boton = document.querySelector('#btn-def2');
    alert("Ninja was liked");
}


function cambiar_texto(variable){
    console.log(variable);
    var boton = document.getElementById('btn'); 
    if(variable.innerText == "Login"){
        variable.innerText = "Logout";
        
    } else {
        variable.innerText == "Logout";
        variable.innerText = "Login";
    }
}

function elimina(elemento_elim){
    elemento_elim.remove(); 
}

