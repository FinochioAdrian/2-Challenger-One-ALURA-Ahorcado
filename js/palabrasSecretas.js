function setLocalStorage(nuevaPalabra) {


    let palabrasSecretasArray = getLocalStorage("palabrasSecretas");
    palabrasSecretasArray.push(nuevaPalabra);
    window.localStorage.setItem("palabrasSecretas", JSON.stringify(palabrasSecretasArray));

}

function getLocalStorage(key = "palabrasSecretas") {

    if (window.localStorage.getItem("palabrasSecretas") == null) {
        window.localStorage.setItem("palabrasSecretas", JSON.stringify(['ALURA', 'ORACLE', 'JAVASCRIPT', 'FUNCION', 'ARREGLO', 'CICLO', 'CASA', 'COLEGIO', 'ESTUDIOS', 'FUTBOL', 'VACACIONES', 'DEPORTES', 'AMIGOS', 'FAMILIA']));
    }
    let palabrasSecretasString = window.localStorage.getItem(key);
    let palabrasSecretasConvertidas = JSON.parse(palabrasSecretasString);

    return palabrasSecretasConvertidas;
}