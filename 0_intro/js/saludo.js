// let salido="hola";
// while(saludo="hola")
// {

//     prompt("Ingresa saludo");

// }

// console.log("Te voy a acusar")


// let tragos= 7;
// let cont=0;
// while(cont<tragos)
// {
//    var quiere = prompt("otro drink");
//    if(quiere=="si")
//    {
//        cont=cont+1;
//    }
//    else{
//        console.log("ya no quieres mas tragos");
//    }
    
// }

// console.log("Pa su casa")
//quiere dar de alta alumnos 

let alumnos=[];
let respuesta="si";
let nombre="";
let contador = 0;

while(respuesta==="si")
{  
   respuesta =  prompt("Dar de alta a otro  alumno?");

    alumnos.push({
        nombre: prompt("nombre")    
        })
    
}

for(let  i=0;i<alumnos.length;i++){
    console.log(`Alumno: ${alumnos[i]}`);
}