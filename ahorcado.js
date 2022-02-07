// Inicialiazando el juego
var intento=0;

var botonJugar=document.querySelector("#iniciar-juego");
var palabrasSecretas=['ALURA','ORACLE','JAVASCRIPT','FUNCION','ARREGLO','CICLO','CASA','COLEGIO','ESTUDIOS','FUTBOL','VACACIONES','DEPORTES','AMIGOS','FAMILIA']
botonJugar.addEventListener("click",function(event){
    
    event.preventDefault();
    intento=0;
    var palabraSecreta=crearPalabraSecreta(palabrasSecretas);
    
    console.log(palabraSecreta);
    dibujarTablero();
    dibujarGuiones(palabraSecreta.length);
    dibujarAhorcado(intento);
    
})

function crearPalabraSecreta(array){
let indiceSorteado=Math.floor(Math.random()*(array.length))
return array[indiceSorteado];

}



