
//*************seleccionar elemntos con un ID concreto******************
let miCaja0 = document.getElementById("miCaja");
//***********************Seleccionar un elemnto por QuerySelector ********
let miCaja = document.querySelector("#miCaja");
/*************************************************************************/
miCaja.innerHTML="Contenido HTML";
miCaja.style.backgroundColor = "red";
miCaja.style.fontSize="20px";
miCaja.style.color="white";
miCaja.className = "NewClass otra" /**agrego clases*/

console.log(miCaja);

function cambiarColor(color){  //entrada del usuario
    miCaja.style.color=color;
}

//
//*******************Obtener elemntos por su etiqueta*********************
let allDivs0 = document.querySelectorAll("div"); //todos los div
/*************************************************************************/
//*******************Obtener elemntos por TagName*************************
let allDivs = document.getElementsByTagName("div");
console.log(allDivs); //geenra un array de elementos
let contDiv = allDivs[2].textContent; //modifica el contenido de un elemento
console.log(contDiv);

//*******************Recorrer los elemntos de un array, añadinedo al final ********************

for(let i=0;i<allDivs.length;i++)
{  let parrafo = document.createElement("p"); //se crea un elemnto p por cada iteracion
   let texto = document.createTextNode(allDivs[i].textContent); //CREA TEXTO
   parrafo.appendChild(texto); // se añade  al final
// document.section.appendChild(parrafo);//no es posible, ya que se debe acceder con un identificador
   document.querySelector("#miSection").appendChild(parrafo);
}
// document.querySelector("#miSection").innerHTML ="<hr>"

/*************************************************************************/

for(let i=0;i<allDivs.length;i++)
{  let parrafo = document.createElement("p"); //creando una etiqueta p 
   let texto = document.createTextNode(allDivs[i].textContent); //CREA TEXTO
   parrafo.append(texto); // se añade  al final
// document.section.appendChild(parrafo);//no es posible, ya que se debe acceder con un identificador
   document.querySelector("#miSection").append(parrafo);
}
//conseguir elemnetos por su clase CSS

let divRojos = document.getElementsByClassName("rojo");
console.log(divRojos);

//QUERY SELECTOR, solo se obtine el primer valor que haya encontrado

var id = document.querySelector("#encab");
console.log(id);
var id = document.querySelector(".rojo");
console.log(id);

var  id = document.querySelector("div");
console.log(id);
//querySelectorAll -->con este puedes seleccionar varioas coincidencias formando un array
var id = document.querySelectorAll("div");
console.log(id);