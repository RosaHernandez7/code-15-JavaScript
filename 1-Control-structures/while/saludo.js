/*
Programa que va a evaluar un saludo, si el saludo es hola, imprime en la consola 'Hola' y pide con un prompt el nuevo saludo
En el momento en que deje de ser hola termina el bucle e imprime 'Te voy a acusar'
*/

let saludo="hola";

while(saludo=="hola")
{
    prompt("Ingresa saludo");
}

console.log("Te voy a acusar")
/*
Practica 2: Contador de cervezas
Son administradores de un bar y por seguridad de sus clientes cuidan la cantidad de tragos que toman, por lo que solo tienen permitido vender un maximo de 7 por cliente.
Hagan un programa en el que le pregunten al cliente si quiere otro trago, si si quiere otro trago incrementen la su contador de tragos, pero si quiere otro y ya tomo 7 esta noche, mandenlo a casa
*/

let tragos= 7;
let cont=0;
while(cont<=tragos)
{
   var quiere = prompt("quieres otro trago?");
   if(quiere=="si")
   {
       cont=cont+1;
   }    
}
console.log("ya vete pa' tu casa");
console.log(cont);

/*
Practica 3: Alta de alumnos
Inicien un arreglo vacio de alumnos
Con un ciclo while pregunten si quieren dar de alta un nuevo alumnos, si si, agreguen  un nuevo objeto alumno al arreglo, pidiendo su nombre y apellido por prompt, si no, terminen el ciclo e impriman la lista de alumnos
Si quieren dar el extra mille, entonces al salir del ciclo con un ciclo for, iteren sobre todos los elementos del arreglo e impriman nombre y aprellido concatenado con template string

*/
let alumnos=[];
let respuesta="si";
let nombre="";
let contador = 0;

while(respuesta==="si")
{   alumnos.push(prompt("nombre y apellido: "));    
    
    respuesta =  prompt("Dar de alta a otro  alumno?");
}

for(let  i=0;i<alumnos.length;i++){
    console.log(`Nombre del alumno: ${alumnos[i]}`);
}