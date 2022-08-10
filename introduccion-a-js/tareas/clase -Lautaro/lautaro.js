//OBJETIVO PREGUNTAR CUANTOS INTEGRANTES HAY EN UN GRUPO DE WSP Y LUEGO COMPLETAR CON EL NOMBRE Y SU CELULAR
console.log("HOLA, PROBAND PROBANDO")

//1- Cuando se apriete #siguiente se tienen que ejecutar dos funciones 
//   la primera es que se borren todos los integrantes que haya 
//   (en caso de haber ) y la segunda funcion sería crear los integrantes.


document.querySelector('#siguiente').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
  
    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
  };

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores(){
    const $amigos = document.querySelectorAll(".amigo");
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    for (let i = 0; i< $cantidadIntegrantes; i++){
        $amigos[i].remove();
    }
    }

// Al poner ".amigos" le estoy diciendo a todos los que tengan la clase amigos.



function crearIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes > 0){
        mostrarBotonLista();
    } else{
        resetear();
    }
    for(let i = 0; i<cantidadIntegrantes; i++){
        crearAmigo(i)
    }
}

function crearAmigo(indice){
    const $div = document.createElement("div");
    $div.className = "amigo";
    
    const $label = document.createElement("label");
    $label.textContent = "Nombre del amigo  " + (indice + 1) + ")";
    const $input = document.createElement("input"); 
    $input.type= "text"; 
    const $label2 = document.createElement("label");
    $label2.textContent = "Celular";
    const $input2 = document.createElement("input");
    $input2.type= "number";
    

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($label2);
    $div.appendChild($input2);

    const $amigos = document.querySelector("#amigos");
    $amigos.appendChild($div)
}

function resetear() {
    borrarIntegrantesAnteriores();
    mostrarBotonLista();
    ocultarResultados();
  }
  
  function ocultarLista() {
    document.querySelector('#Crear-lista').className = 'ocultar';
  }
  
  function mostrarBotonLista() {
    document.querySelector('#Crear-lista').className = '';
  }