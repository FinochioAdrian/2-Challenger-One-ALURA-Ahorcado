// Inicialiazando el juego
var intento = 0;
var palabraSecreta;
var palabraSecretaArray;
var botonJugar = document.querySelector("#iniciar-juego");
var palabrasSecretas = ['ALURA', 'ORACLE', 'JAVASCRIPT', 'FUNCION', 'ARREGLO', 'CICLO', 'CASA', 'COLEGIO', 'ESTUDIOS', 'FUTBOL', 'VACACIONES', 'DEPORTES', 'AMIGOS', 'FAMILIA']
var body = document.querySelector("body");
botonJugar.addEventListener("click", function (event) {

    event.preventDefault();
    intento = 0;
    palabraSecreta = crearPalabraSecreta(palabrasSecretas);

    console.log(palabraSecreta);
    dibujarTablero();
    dibujarGuiones(palabraSecreta.length);
    palabraSecretaArray = palabraSecreta.split("");
    console.log(palabraSecretaArray);
    dibujarAhorcado(intento);



    body.addEventListener("keydown", (event) => evaluarEntradaTeclado(event));

})

function crearPalabraSecreta(array) {
    let indiceSorteado = Math.floor(Math.random() * (array.length))
    return array[indiceSorteado];

}

function evaluarEntradaTeclado(event) {

    var keycode = event.keyCode;
    var keys = event.key;

    if ((keycode > 64 && keycode < 91) || keycode == 192) {
        if (validarLetraMayuscula(keys)) {
            if (palabraSecretaArray.includes(keys)) {

                for (i = 0; i < palabraSecretaArray.length; i++) {

                    if (palabraSecretaArray[i]==keys){
                        dibujarLetraCorrecta(keys, i+1, palabraSecreta.length);
                    }

                };


            } else{
                intento++;
                dibujarAhorcado(intento);
                
                    dibujarLetraIncorrecta(keys);
                
            }

        }
    }
};

function validarLetraMayuscula(tecla) {
    let regxp = new RegExp(/[A-Z]|[Ñ]/);

    return regxp.test(tecla);

}

