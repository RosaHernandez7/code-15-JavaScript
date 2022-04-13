//bom INvestigar más acerca del BOM 
'use strict'// para que s esto 

/*
BOM - Browser Object Model
*/
//estas propiedades varian segun el tamaño del navegador en ese instante
console.log(window.innerHeight); //Alltura de la ventana
console.log(window.innerWidth); //Ancho de la ventana

//para obtener los valores reales
console.log(screen.height); 
console.log(screen.width);

//obetenr url actual 
console.log(window.location);
console.log(window.location.href);

//funcion que te redidrecciona 
function redirect(url){
    window.location.href=url;
}
//abrir nueva ventana
function abrirVentana(url)
{  // window.open(url); //abre una ventana externa 
  //abrir la bventana personalizada
  window.open(url, "","width=500, height=300"); ;
}