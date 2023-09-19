//alert("hola este es mi javascript");
//let nombre= "Sebastian"
//nombre="laura"
//var nombre1= "Sebastian"

//const nombre2= "Sebastian"

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

let logo = "Sebastian Rojas Avila";

let titulo = document.getElementById("logo")
titulo.innerHTML = logo;

//CONDICIONALES

let textotitulo = titulo.innerHTML;
console.log(textotitulo);

if (textotitulo != "nombre") {

    titulo.innerHTML = "Roble"
}
console.log(typeof (textotitulo))

// CONDICIONALES FORMULARIO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");


function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length <5) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});