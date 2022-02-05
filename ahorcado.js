// Inicialiazando el juego

var botonJugar=document.querySelector("#iniciar-juego");
var palabrasSecretas=['ALURA','ORACLE','JAVASCRIPT','FUNCION','ARREGLO','CICLO','CASA','COLEGIO','ESTUDIOS','FUTBOL','VACACIONES','DEPORTES','AMIGOS','FAMILIA']
botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    var palabraSecreta=sortearPalabraSecreta(palabrasSecretas);
    console.log(palabraSecreta);
    dibujarTablero();
    
})

function sortearPalabraSecreta(array){
let indiceSorteado=Math.floor(Math.random()*(array.length))
return array[indiceSorteado];

}

