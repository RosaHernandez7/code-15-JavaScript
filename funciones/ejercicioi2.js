//numero positivo o negativp
let num = -6;
function positivoNegativo(num){

    if(num<0){
        console.log("negativo") ;
    }
    else
    {
        console.log("positivo") ;
    }

}

positivoNegativo(num);


//Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

let nombre="Cristina";
let ref="450";

// let infoCliente = {
//     nombre: ["Alejandro","Paola"],
//     referencia: ["12", "13"],
//     ahorro: [12,13]
// };


function obtenerDatos(nomCliente, referencia){
    if(nomCliente==nombre && referencia==ref)
    {   let monto=450;
        console.log(`Nombre de cliente: ${nombre} y su monto ahorrado es de: ${monto} `);
    }
    
}

obtenerDatos("Cristina", "450");


// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio
let calificaciones = [12,14,15,16];
let suma=0;
let prom=0;
function calcularPromedio(calificaciones){
    for(let i =0;i<calificaciones.length;i++){
       suma = suma + calificaciones[i]; 
    }
    prom = suma/(calificaciones.length);
    console.log( `El promedio es ${prom}`);

}
calcularPromedio(calificaciones);

// 4. Crear una función que reciba un número y nos diga si es par o impar
let numero=5;

function determinarParidad(numero){
    if(numero%2===0){
        console.log("es par");
    }
    else{
        console.log("es impar");
    }
}
determinarParidad(numero);

// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)
let codigo=[12, 13, 14];
let descuento = [1,5,10];


function mostrarDescuento(codeUser){
    for(let i=0;i<codigo.length;i++){
        if(codeUser===codigo[i])
        {
           return (`Código ingresado: ${codigo[i]} y su descuento es ${descuento[i]}`);
        }
    }
}
console.log(mostrarDescuento(12));


// 6. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área
let base =12;
let altura =19;


function obtenerArea(base, altura){
    return (base*altura)/2;
}

console.log(obtenerArea(base,altura));


// 8. Crear una función que reciba 2 números y me entregue el número más alto



// 9. Crear una función que reciba 2 números y me entregue el número más pequeño

// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres

// 11. Crear una función que reciba 1 número y me lo muestre al cubo

// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene

// 13. Crear una función que reciba una palabra y la transforme a minúsculas

// 14. Crear una función que reciba una palabra y la transforme a mayúsculas

// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']