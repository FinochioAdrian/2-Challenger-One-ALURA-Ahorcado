var tablero = document.querySelector("#ahorcado");

const pincel = tablero.getContext("2d");

var posX = 200;
var posY = 700;
pincel.lineWidth = 15;
pincel.lineCap = 'round';
pincel.lineJoin = "round";
pincel.strokeStyle = "Black";


//funcion crear tablero
function dibujarTablero() {
    pincel.fillStyle = "#bcebeb";
    pincel.fillRect(0, 0, 1200, 800);
    dibujarBaseHorca(posX, posY);
    
    
}

function dibujarAhorcado(intento) {

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
    pincel.strokeStyle = "Black"
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
function dibujarGuiones(cantGuiones){
    console.log(cantGuiones);
    let posXguion=400;
    let posYguion=700;
    for (let i=1;i<=cantGuiones;i++){
        console.log(i);
        console.log(posXguion, posYguion);
        
        pincel.strokeStyle = "Black";

        
        pincel.beginPath();
        pincel.moveTo(posXguion, posYguion);

        
        pincel.lineTo(posXguion+=50, posYguion);
        /* pincel.closePath(); */
        pincel.stroke();
        console.log(posXguion, posYguion);
        posXguion+=30;
    }
}