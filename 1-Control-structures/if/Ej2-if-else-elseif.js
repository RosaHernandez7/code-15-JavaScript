// Ejercicio 2. Con condicionales If/if else /else if

// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre  y 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

var num1 = parseInt(prompt("Ingresa un número"));

if (num1 % 5 == 0) {
  console.log("Cool");
} else {
  console.log("No es cool");
}

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

var codigo = prompt("Ingresa código");

if (codigo == "happy") {
  console.log("cool bro, the life is short");
} else if (codigo == "sad") {
  console.log("go for tacos bro, tacos = smile");
} else {
  console.log("codigo inválido");
}

// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

var level = parseInt(prompt("Ingresa tu nivel (número)"));
if (level>=0 && level<=10) {
    console.log("Paladín");
  } else if (level>=11 && level<=30) {
    console.log("caballero dorado");
  } else if (level>=31 && level<=50) {
    console.log("dios destructor");
  }

// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

//cON LA FUNCIÓN toLowerCase() --> convierto la entrada en minusculas para la validación
var player1 = prompt("Ingresa valor player 1").toLowerCase();
var player2 = prompt("Ingresa valor player 2").toLowerCase();
console.log(player1+player2);
if (
  (player1 == "tijera" && player2 == "tijera") ||
  (player1 == "piedra" && player2 == "piedra") ||
  (player1 == "papel" && player2 == "papel")
) {
  console.log("Empate");
} else if ((player1 === "piedra" && player2 === "tijera") || (player1 === "papel" && player2 === "piedra") || (player1 === "tijera" && player2 === "papel")) {
  console.log("Ganó player1");
} else if ((player1 === "piedra" && player2 === "papel") || (player1 === "tijera" && player2 === "piedra")  || (player1 === "papel" && player2 === "tijera")) {
  console.log("Ganó player2");
}

// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.
let num1 = 5;
let num2 = 4;
let num3 = 1;

if (num1 > num2 && num1 > num3) {
  console.log(`El número mayor es ${num1}`);
} else if (num2 > num3) {
  console.log(`El número mayor es ${num2}`);
} else {
  console.log(`El número mayor es ${num3}`);
}
