/*Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
*Nota: sólo con for, no se vale usar funciones que ya existan */
let score = [];
let answer = "si";

while(answer==="si")
{   score.push(prompt("Ingresa calificación..."));
    answer = prompt("Deseas ingresar otra calificación?");
}

console.log("Calificaciones ingresadas: ");

for(let i=0;i<score.length;i++){
    console.log(score[i]);
}

console.log("**************************************");

for(let i=0;i<score.length;i++){
    for(let j = 0;j<score.length;j++)
    { console.log(`Antes del cambio score[j] ${score[j]} score[j+1] ${score[j+1]}  `);
           if(score[j]>score[j+1])
           {  
               
                let x=score[j];
               score[j]=score[j+1];
               score[j+1]=x;
           }
           console.log(`Después del cambio score[j] ${score[j]} score[j+1] ${score[j+1]}  `);   
    }
}

console.log("Calificaciones ordenadas ingresadas: ");
for(let i=0;i<score.length;i++){
    console.log(score[i]);
}

console.log(`Calificación mínima: ${score[0]}`);
console.log(`Calificación máxima: ${score[score.length-1]}`);


// Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...
// *puedes poner un tope de cuántos elementos de la serie quieres 

let a=0;
let b=1; 
let y=0;

for(let i=0; i<12;i++)
{   if(i===0 || i===1)
    {   y = a + b;
        console.log(y);
        y=0;
    }
    else{
        y= a+b;
        a=b;
        b=y;
        console.log(y);
    }
}
//otra forma de hacerlo 

/*let fib = []
fib[0] = 0
fib[1] = 1
for (let i = 2; i <= 10;i++){
  fib[i] = fib[i-2] + fib[i-1]
  console.log(fib[i])
}
 */


/*
Mostrar en la consola la table de un número (del 1 al 10)
// Tabla del 2
// 1 x 2 = 2
// 2 x 2 = 4
// 3 x 2 = 6 
// .
// .
// 10 x 2 = 20
*/

