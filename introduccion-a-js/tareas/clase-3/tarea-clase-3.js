// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


let nombrePersona = String(prompt("Cual es tu nombre?"))

function preguntarNombre (nombrePersona = String(prompt("Cual es tu nombre?").toLowerCase())){
    if(nombrePersona === "lautaro"){
        console.log("Hola, Tocayo! Yo tambien me llamo " + nombrePersona)
    }
    else if(nombrePersona === "Sandra" || nombrePersona === "sandra"){
        console.log("Hola " + nombrePersona + ", te llamas igual que mi madre")

    }
    else if(nombrePersona.trim().length === 0){
        console.log("No hay respuestas")
    }
    else ("Hola " + nombrePersona + "!")
}

function preguntarEdad (edadPersona = Number(prompt("¿Cuantos años tienes?"))){
    if(edadPersona > 23){
        console.log("Tu eres mas grande que yo");
    }
    else if(edadPersona === 23){
        console.log("Tenemos la misma edad");
    }
    else if (edadPersona < 23){
        console.log("Eres menos que yo")
    }
    else {
        console.log("No entendi tu respuesta")
    }
}

// ENTRAR AL BAR O NO

const EDAD_MINIMA_PARA_BAR = 18
const RESPUESTA_SI = "si"
const respuesta_no = "no"

const usuarioTieneDocumento = String(prompt("Tenes documento? Contestar con si o no")|| " ").toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI ){
    const edadUsuario = Number(prompt("¿Cuantos años tenes?"));
    if (edadUsuario >= EDAD_MINIMA_PARA_BAR){
        console.log("Podes pasar al bar")
    }
    else if(edadUsuario < EDAD_MINIMA_PARA_BAR) {
        console.log("No podes pasar al bar ya que sos menor de edad")
    }
else if(usuarioTieneDocumento === respuesta_no){
    console.log("No podes pasar por no tener documento");
}else {
    console.log("No entiendo la respuesta");
}
}


