

//funcion crear tablero
function dibujarTablero (){
var tablero =document.querySelector("#ahorcado");

var pincel = tablero.getContext("2d");

pincel.fillStyle="#ecf1f1";
pincel.fillRect(0,0,1200,800);
}

