let array_num=[];
let j=0;

let texto = document.getElementById("escribir");
let texto1 = document.getElementById("escribir1");

for(let i=2;i<=6;i++) //ya tenemos el arreglo
{
    array_num.push(i);
    j++;
    // texto.innerHTML +=`${i} +` ;
}

for(let i=0;i<=6-2;i++)
{
    texto.innerHTML +=`${array_num[i]} +` ;
}

array_num=array_num.sort(function(){
    return Math.random() - 0.5 //por qué 0.5??????
    });
    alert(array_num);
for(let i=0;i<=6-2;i++)
{   
    texto1.innerHTML +=`${array_num[i]} +` ;
}


//antes de moverle así esta investigar como funciona el math random 

// let btn_sig = document.getElementById("btn-sig");

// /* Array de imágenes */
// let img_array = [];
// for(let i=1;i<=54;i++)
// {
//     img_array.push("../main-page/images/baraja/"+i+".jpg");
// }
// //Se agrega evento onclick al boton 
// btn_sig.onclick = iniciarJuego();

// let index=0;
// let min = 2;
// let max =55;

// function iniciarJuego()
// {
//     btn_sig.addEventListener("click", (e)=>
//     {   let image = document.getElementById("aaa");
        
//         // alert("inicia el juego");
//         const myInterval = setInterval(function slide(){
//             index = Math.floor(Math.random() * (55 - 2)) + 2;
              
//             console.log(index);
//             image.setAttribute("src", img_array[index] );
            
//             // index++; //este debe ser un nuemro random 
//             if(index>=img_array.length)
//             {
//             // index=0;
//                 clearInterval(myInterval);
//             }
//         }, 2000);       
//     }); 
// }

