
/*
Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:

    *
   ***
  *****
 *******
********* */


let a = "*";

for(let i = 0;i<3;i++)
{   for(let j=0;j<i;j++)
    {    
        console.log(a.repeat(j));
    }
}