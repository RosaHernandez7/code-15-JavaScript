// Ejercicio 1
/*

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// "Quiero mucho a mis mascotas mascota1 y mascota2"

// var mascotaUsuario1 = prompt("Dime el nombre de tu primera mascota");
// var mascotaUsuario2 = prompt("Dime el nombre de tu segunda mascota");

// console.log("Quiero mucho a " + mascotaUsuario1 + " y " + mascotaUsuario2);

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

// Muestra el contenido de esta variable en consola

// Muestra el TIPO DE DATO de esta variable en consola

// Transforma la variable de string a number
// Muestra nuevamente el contenido de esta variable en consola

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?
*/

var animal1 = "Pedrito";
var animal2 = "Rufo";
var animal3 = "Chancla";

console.log(`Mis mascotas son ${animal1}, ${animal2} y ${animal3}. Los quiero mucho`);

var inputAnimal1 = prompt("Ingresa mascota el mnombre de mascota");
console.log(inputAnimal1);

var inputAnimal2 = prompt("Ingresa mascota el mnombre de mascota");
console.log(inputAnimal2);

console.log(`Quiero mucho a mis mascotas  ${inputAnimal1}, ${inputAnimal2}`);

var num ="100";

console.log(num);
console.log(typeof(num));

var str2num = parseInt("100");
console.log(str2num)
console.log(typeof(str2num));

