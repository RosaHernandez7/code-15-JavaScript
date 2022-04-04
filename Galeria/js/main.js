let imagenGrande = document.getElementById("imagenGrande");
let contenedorMiniaturas = document.getElementById("contenedorMiniaturas");

/*Guardar imagenes en un array y obtener su tamaño*/

for(let i=1;i<=3;i++){
    let nuevaImagen = document.createElement("img"); // se crea un elemnto HTML
    nuevaImagen.src ="img/pic"+i+".jpg"; //se le asigna un atributo 
    contenedorMiniaturas.appendChild(nuevaImagen);

    nuevaImagen.addEventListener("click",function(e){
        let mySrc = nuevaImagen.src;
        imagenGrande.src= mySrc;
    });
}


