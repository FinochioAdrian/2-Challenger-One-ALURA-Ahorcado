var tablero = document.querySelector("#ahorcado");

const pincel = tablero.getContext("2d");

var posX = 200;
var posY = 700;
var posXletraInc = 600;
var posYletraInc = 300;
pincel.lineWidth = 15;
pincel.lineCap = 'round';
pincel.lineJoin = "round";
var colorMadera="#dbb87b";

var letrasPresionadas = [];



function reiniciarPosicionLetrasIncorrectas() {
    posXletraInc = 600;
    posYletraInc = 300;
}


//funcion crear tablero
function dibujarTablero() {
    pincel.fillStyle = "rgba(0,0,0,0)";
    pincel.fillRect(0, 0, 1200, 800);
   
    dibujarBaseHorca(posX, posY);


}

function dibujarAhorcado(intento) {

    if(intento<=3){
        pincel.strokeStyle = colorMadera;
    }else{
        pincel.strokeStyle ="white";
    }
   
    if (intento == 1) {
        dibujarHorcaVertical(posX, posY);
    } else
    if (intento == 2) {
        dibujarHorcaHorizontal(posX, posY);
    } else
    if (intento == 3) {
        dibujarHorcaSoga(posX, posY);
    } else
    if (intento == 4) {
        dibujarCabeza(posX, posY);
    } else
    if (intento == 5) {
        dibujartorso(posX, posY);
    } else
    if (intento == 6) {
        dibujarPiernaIzquierda(posX, posY);
    } else
    if (intento == 7) {
        dibujarPiernaDerecha(posX, posY);
    } else
    if (intento == 8) {
        dibujarBrazoIzquierdo(posX, posY);
    } else
    if (intento == 9) {
        dibujarBrazoDerecho(posX, posY);
    }





}

function dibujarBaseHorca(x, y) {
    pincel.strokeStyle = colorMadera;
    pincel.beginPath();
    pincel.moveTo(x, y);

    pincel.lineTo(x - 100, y + 50);
    pincel.lineTo(x + 100, y + 50);
    pincel.lineTo(x, y);
    pincel.stroke();


}

function dibujarHorcaVertical(x, y) {
    
    pincel.beginPath();
    
    pincel.moveTo(x, y);

    pincel.lineTo(x, y - 550);
    pincel.stroke();
}

function dibujarHorcaHorizontal(x, y) {
    y -= 550;

    pincel.beginPath();
    pincel.moveTo(x, y);

    pincel.lineTo(x + 300, y);
    pincel.stroke();
}

function dibujarHorcaSoga(x, y) {
    x += 300;
    y -= 550;


    pincel.beginPath();
    pincel.moveTo(x, y);

    pincel.lineTo(x, y + 100);
    pincel.stroke();
}

function dibujarCabeza(x, y) {
    x += 300;
    y -= 400;

    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.arc(x, y, 45, 0, 2 * Math.PI);
    pincel.stroke();
}

function dibujartorso(x, y) {
    x += 300;
    y -= 355;

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x, y + 175);
    pincel.stroke();
}

function dibujarPiernaIzquierda(x, y) {
    x += 300;
    y -= 180;

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x - 75, y + 100);
    pincel.stroke();
}

function dibujarPiernaDerecha(x, y) {
    x += 300;
    y -= 180;

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x + 75, y + 100);
    pincel.stroke();
}

function dibujarBrazoIzquierdo(x, y) {
    x += 300;
    y -= 300;

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x - 75, y - 100);
    pincel.stroke();
}

function dibujarBrazoDerecho(x, y) {
    x += 300;
    y -= 300;

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x + 75, y - 100);
    pincel.stroke();
}

function dibujarGuiones(cantGuiones) {

    let posXguion = 400;
    let posYguion = 700;
    for (let i = 1; i <= cantGuiones; i++) {
        pincel.strokeStyle = "Black";


        pincel.beginPath();
        pincel.moveTo(posXguion, posYguion);


        pincel.lineTo(posXguion += 50, posYguion);
        /* pincel.closePath(); */
        pincel.stroke();

        posXguion += 30;
    }
}

function dibujarLetraCorrecta(letra, indice, strlength) {


    let posXletra = 400;
    let posYletra = 675;


    for (i = 0; i < strlength; i++) {

        if (indice == i) {

            pincel.font = "50px Georgia";
            pincel.fillStyle = "#e9eed1";
            
            pincel.fillText(letra, posXletra, posYletra);

            return;
        }
        posXletra += 82;
    }



}

function dibujarLetraIncorrecta(letra) {





    pincel.font = "50px Georgia";
    pincel.fillStyle = "#e9eed1";
    pincel.fillText(letra, posXletraInc, posYletraInc);
    posXletraInc += 50;
    console.log("LETRA PULSADA:" + letra);
    console.log(posXletraInc);
    if (posXletraInc > 1100) {
        posXletraInc = 600;
        posYletraInc += 100;
    }





}

function dibujarFinDelJuego() {
    pincel.font = "50px Georgia";
    pincel.fillStyle = "red";
    pincel.fillText("Fin del juego!", 600, 200);
}

function dibujarGanastes() {



    pincel.font = "50px Georgia";
    pincel.fillStyle = "greenyellow";
    pincel.fillText("Ganastes, Felicidades!", 600, 200);




}

