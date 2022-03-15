// Siempre optimizar el uso de la memoria 
//Scope -> alcance -> contexto  -> memoria

//SCOPE

//globales,  -> constxto general del programa, se reserva unespacio mas grande 
var nombre = "hiro"; //se puede accder a ella en todo el documento 
console.log(nombre);
{
    console.log(nombre);
    var nom2 ="serch"; 
    console.log(nom2);
}
console.log(nom2);

//locales
let nom3 ="Daina" 
console.log(nom3);
{
    console.log(nom3);
    let nom4 ="arturo" 
    console.log(nom4); //solo existe dentro del contexto particular o dentro del bloque
}
console.log(nom4);

nom3 ="julio";
console.log(nom3);
//constantes --> no puedecambiar de lvalor  y se utiliza solo en el contexto 

const nom5 ="lipe";
console.log(nom5);
nom5="f";//no se puede cambiar

{
   const nom6 ="arturo" 
    console.log(nom6); //solo existe dentro del contexto particular o dentro del bloque
}

console.log(nom6); 


//buenas practicas siempre ocupar let y const y no VAR, evitarlo !!!!!!!
