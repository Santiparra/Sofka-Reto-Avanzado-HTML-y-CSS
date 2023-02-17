const acordeon = document.querySelectorAll(".acordeon");
const selectoresTemas = document.querySelectorAll(".tema");

const mostrarContenido = (evento) => {
    let contenido = evento.target.nextElementSibling   
        contenido.classList.toggle("mostrar");
}

const cambiarTema = (evento) => {
    document.documentElement.className = evento.target.id;
}

acordeon.forEach((boton) => {
    boton.addEventListener("click", mostrarContenido)
})  

selectoresTemas.forEach((boton) => {
    boton.addEventListener("click", cambiarTema)
}) 

/* Tambien podria haberlo hecho de la siguiente forma:

acordeon.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        let contenido = evento.target.nextElementSibling   
        contenido.classList.toggle("mostrar");
    });
}); 

pero personalmente prefiero mantener la funcion separada del evento 
lo mismo con la paleta de colores*/
