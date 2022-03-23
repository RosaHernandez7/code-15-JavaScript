
let score = [];
let answer = "si";

while(answer==="si")
{   score.push(
         prompt("Ingresa calificación...")    
        );

    answer = prompt("Deseas ingresar otra calificación?");
}

console.log("Calificaciones ingresadas: ");
for(let i=0;i<score.length;i++){
    console.log(score[i]);
}

console.log("**************************************");
let x=0;
let y=0;

for(let i=0;i<score.length-1;i++){
    // console.log(score[i]);
    for(let j = i+1;j<score.length;j++)
    {
           if(score[j]<score[i])
           {   x=score[i];
               score[i]=score[j];
               score[j]=x;
           }
    }
}

console.log("Calificaciones ordenadas ingresadas: ");
for(let i=0;i<score.length;i++){
    console.log(score[i]);
}

console.log(`Calificación mínima: ${score[0]}`);
console.log(`Calificación máxima: ${score[score.length-1]}`);
