// 16-03-22

// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y nos regrese un arreglo con sólo los elementos tipo number

let words = [4,"dos",8,"tres",5,9,1,"cero"];
let numbers = [];
function getNumber(words){
    for(let i=0;i<words.length;i++){

        if(words[i]*0===0)
        {   
            numbers.push(words[i]);
            
        }
    }
    return numbers;

}
console.log(getNumber(words));


// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

let num =6;

// let arr = []

function getParity(num){
    for(let i=0;i<num;i++)
    {
        if(i%2===0)
        {
            return i;
        }
    }

}

console.log(getParity(num));

// 3. Crear una función que me entregue un número entero random entre 1 y 100

function crearNumeroRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(crearNumeroRandom(1 , 101));



// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2


// //function reemplazar(string) {
//     string=string.toLowerCase();
//     arr=string.split("");
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]=="a") {
//             arr[i]=arr[i].replace("a",4)
//         }else if (arr[i]=="e") {
//             arr[i]=arr[i].replace("e",3)
//         }else if(arr[i]=="i") {
//             arr[i]=arr[i].replace("i",7)
//         }else if(arr[i]=="o") {
//             arr[i]=arr[i].replace("o",6)
//         }else if(arr[i]=="u") {
//             arr[i]=arr[i].replace("u",2)
//         }
//     }
//     return arr.join('')
// }
// console.log(reemplazar("aeiou"));
