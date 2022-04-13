window.addEventListener('load', (e)={

//aqui ponde el codigo en funciones para que se cargue todo y asi poner el script al inciio yu no al final 


}); //end load


//Eventos del ratón 
let envcab =document.getElementById("encab");
console.log(envcab)
envcab.addEventListener("mouseover",(e)=>{
    envcab.style.background="blue";
    // alert("hi")
});

//eventos con el teclado
let boton =document.getElementById("press-button");
//focus - notar que se esta dentro de un cierto campo
let nombre = document.getElementById("nombre");
nombre.addEventListener("focus",(e)=>{
    console.log("estas dentro del input");
});


//blur - notar qe se salio de una cierta area
nombre.addEventListener("blur",(e)=>{
        console.log("estas fuera del input");
    });
//keydown
nombre.addEventListener("keydown",(e)=>{
    console.log("estas pulsando esta tecla: "+ e.key);
});



//keypress
nombre.addEventListener("keypress",(e)=>{
    console.log("tecla presionada: "+ e.key);
});

//keyup
nombre.addEventListener("keyup",(e)=>{
    console.log("dejaste de preionar: "+ e.key);
});