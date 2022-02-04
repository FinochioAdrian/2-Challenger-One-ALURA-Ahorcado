// Inicialiazando el juego

var botonJugar=document.querySelector("#iniciar-juego");

botonJugar.addEventListener("click",function(event){
    event.preventDefault();
    
    dibujarTablero();
    
})