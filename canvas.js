

//funcion crear tablero
function dibujarTablero (){
var tablero =document.querySelector("#ahorcado");
console.log(tablero);
var pincel = tablero.getContext("2d");

pincel.fillStyle="lightgrey";
pincel.fillRect(0,0,1200,800);
}

