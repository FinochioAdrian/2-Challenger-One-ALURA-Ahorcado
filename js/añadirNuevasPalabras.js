var botonAgregarPalabras = document.querySelector("#nueva-palabra");
var spanError = document.querySelector("#span-error");


botonAgregarPalabras.addEventListener("click", (event) => {

    event.preventDefault();
    var inputPalabraNueva = document.querySelector("#input-nueva-palabra");
    var nuevaPalabra = inputPalabraNueva.value;
    if (validarPalabraEnMayusculas(nuevaPalabra)) {


        insertarPalabrasSecretas(nuevaPalabra);
        inputPalabraNueva.value = "";


    } else {
        mostrarMensajeError();
        setTimeout(ocultarMensajeError, 3000)
    }



})

function mostrarMensajeError() {


    spanError.className = "mensaje-error";


}

function ocultarMensajeError() {
    spanError.className = "hidden";
}