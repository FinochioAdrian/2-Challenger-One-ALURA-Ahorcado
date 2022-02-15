// Inicialiazando el juego
var intento,palabraSecreta,palabraSecretaArray,aciertos;
var botonJugar = document.querySelector("#iniciar-juego");
var palabrasSecretas = ['ALURA', 'ORACLE', 'JAVASCRIPT', 'FUNCION', 'ARREGLO', 'CICLO', 'CASA', 'COLEGIO', 'ESTUDIOS', 'FUTBOL', 'VACACIONES', 'DEPORTES', 'AMIGOS', 'FAMILIA']
var body = document.querySelector("body");
var letrasPresionadas = [];

botonJugar.addEventListener("click", function (event) {

    event.preventDefault();
    intento = 0;
    aciertos = 0;
    palabraSecreta = crearPalabraSecreta(palabrasSecretas);
    letrasPresionadas.length = 0;
    console.log(palabraSecreta);
    dibujarTablero();
    dibujarGuiones(palabraSecreta.length);
    palabraSecretaArray = palabraSecreta.split("");
    reiniciarPosicionLetrasIncorrectas();
    console.log(palabraSecretaArray);
    dibujarAhorcado(intento);



    console.log(palabraSecreta.length);
    body.addEventListener("keydown", (event) => evaluarEntradaTeclado(event));


})

function crearPalabraSecreta(array) {
    let indiceSorteado = Math.floor(Math.random() * (array.length))
    return array[indiceSorteado];

}

function evaluarEntradaTeclado(event) {

    var keycode = event.keyCode;
    var keys = event.key;

    if (!finDelJuego(intento) && !ganastes(aciertos, palabraSecreta)) {
        if ((keycode > 64 && keycode < 91) || keycode == 192) {
            if (validarLetraMayuscula(keys)) {
                if (palabraSecretaArray.includes(keys) && !letrasPresionadas.includes(keys)) {

                    for (i = 0; i < palabraSecretaArray.length; i++) {

                        if (palabraSecretaArray[i] == keys) {

                            dibujarLetraCorrecta(keys, i, palabraSecreta.length);
                            aciertos++;
                            console.log(aciertos);
                            if (ganastes(aciertos, palabraSecreta)) {
                                dibujarGanastes();
                            }
                        }

                    }
                    letrasPresionadas.push(keys);


                } else if (!letrasPresionadas.includes(keys)) {

                    intento++;
                    dibujarAhorcado(intento);

                    dibujarLetraIncorrecta(keys);
                    letrasPresionadas.push(keys);


                }


            }
        };
    } else if (finDelJuego(intento)) {
        dibujarFinDelJuego();

    }

}

function validarLetraMayuscula(tecla) {
    let regxp = new RegExp(/[A-Z]|[Ñ]/);

    return regxp.test(tecla);

}

function finDelJuego(intento) {
    return (intento == 9) ? true : false;
}

function ganastes(aciertos, str) {
    return (aciertos == str.length) ? true : false;
}

function validarPalabraEnMayusculas(palabra) {
    let arrayPalabraInsertada = palabra.split("");
    let estado = true;
    
    arrayPalabraInsertada.forEach(element => {
        let letra = validarLetraMayuscula(element)
        if (!letra) {
            estado = false;
        }
    });
    
    return estado;
}

function insertarPalabrasSecretas(insertarStrg){
    palabrasSecretas.push(insertarStrg);
    
}
function getPalabrasSecretas(){
    return palabrasSecretas;
}