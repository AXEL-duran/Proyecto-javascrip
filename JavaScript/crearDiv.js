let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="Boton creado";
    nuevoid.classList.add("borde-negro");

    let contenido=document.getElementById("resultadoDiv");
    contenido.appendChild(nuevoid);
})