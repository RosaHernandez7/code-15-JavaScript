let imagenGrande = document.getElementById("imagenGrande");
let btn_sig = document.getElementById("btn-sig");
let mostrarImagen = document.createElement("img");

// let img_array = ["../img/pic1.jpg", "../img/pic2.jpg", "../img/pic3.jpg"];
let img_array = [];

for(let i=1;i<=6;i++)
{
    img_array.push("../img/pic"+i+".jpg");
}
//Implementación con los 3 segundos OFCIAL


// const myInterval = setInterval("slide()", 1000);
// let image = document.getElementById("aaa");
// let index=1;

// function slide()
// {  
//     image.src = img_array[index]; // es igual a document["aaa"].src = img_array[index];
//     index++;
//     if(index>=img_array.length)
//     {
//     // index=0;
//         clearInterval(myInterval);
//     }
// }

//Implementacion en funcion
// const myInterval = setInterval("slide1()", 1000);
// let image = document.getElementById("aaa");
// let index=1;

// function slide1()
// {   for(let i=1;i<=img.array.length;i++)
//     {
//         image.src = img_array[i]; 

//     }
    
    
//     // if(index>=img_array.length)
//     // {
//     // // index=0;
//     //     clearInterval(myInterval);
//     // }
// }


//implementación con boton de incio en esta prueba de GALERIA
btn_sig.onclick = iniciarJuego();

function iniciarJuego()
{
    btn_sig.addEventListener("click", (e)=>
    {   let image = document.getElementById("aaa");
        let index=1;
        // alert("incia el juego");
        const myInterval = setInterval(function slide(){


            image.src = img_array[index]; // es igual a document["aaa"].src = img_array[index];
            
            index++;
            if(index>=img_array.length)
            {
            // index=0;
                clearInterval(myInterval);
            }
        }, 1000);
        
    }); 
}





// btn_sig.addEventListener("click",  (e)=>{
//     for(let i=1;i<=3;i++)
//     {
        
       
//        setTimeout(function() { 
//            mostrarImagen.setAttribute("src",arrayImages[i]);
//         document.body.appendChild(mostrarImagen) }, 3000);
//     }
// // este es otro intento    
// //   setTimeout(
// //     function(){  for(let i=1;i<=6;i++)
// //     {   
// //         imagenGrande.src = "../img/pic"+i+".jpg";
       
        
// //     }
// //      }, 3000);

// //version donde se ven los elemntos 
// //     function doSetTimeout(i) {
// //         setInterval(function() { imagenGrande.src = "../img/pic"+i+".jpg"; }, 1000);
// //      }
  
// //   for (var i = 1; i <= 6; ++i)
// //     doSetTimeout(i);


// })
// //hacer un cambio de  src 



//+++++++++Esta version muestra las imagenes aleatoprias pero se repiten 

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
// let min = 1;
// let max =55;

// function iniciarJuego()
// {
//     btn_sig.addEventListener("click", (e)=>
//     {   let image = document.getElementById("aaa");
        
//         // alert("inicia el juego");
//         const myInterval = setInterval(function slide(){
//             index = Math.floor(Math.random() * (55 - 2)) + 2;
              
//               console.log(index);
//             image.setAttribute("src", img_array[index] );
//             // image.src = img_array[index]; // es igual a document["aaa"].src = img_array[index];
            
//             // index++; //este debe ser un nuemro random 
//             if(index>=img_array.length)
//             {
//             // index=0;
//                 clearInterval(myInterval);
//             }
//         }, 2000);       
//     }); 
// }

//******************************************* */

//Ejemplo de como se muestra el texto acumulatuivo con innerHTML
// let array_num=[];
// let j=0;

// let texto = document.getElementById("escribir");

// for(let i=2;i<=6;i++)
// {
//     array_num.push(i);
//     // alert(array_num[j]);
//     j++;
//     texto.innerHTML +=`${i} +` ;
// }

/*En este apartado desordene el array  de imágenes*/

// img_array=img_array.sort(function(){
//     return Math.random() - 0.5 //por qué 0.5??????
//     });
//     alert(img_array); //para corroborar el orden del arreglo

/*************este es el ultimo que tengo pero algo fallo*************** */


// let btn_sig = document.getElementById("btn-sig");
// let index=0; //contador de imágenes

// /* Array de imágenes */

// let img_array = [];
//     for(let i=2;i<=10;i++)
//     {
//         img_array.push("../main-page/images/baraja/"+i+".jpg");
//     }
//     alert(img_array);

//Se agrega evento onclick al boton 
// btn_sig.onclick = iniciarJuego();

// function iniciarJuego()
// {   
//     btn_sig.addEventListener("click", (e)=>
//     {   let image = document.getElementById("aaa");
        
//         const myInterval = setInterval(function slide(){
                       
//             // image.setAttribute("src", img_array[index] );
//             image.src = img_array[index];
//             index++;

//             if(index>=img_array.length)
//             {  //cuando llegue al último elemnto se dentendra el intervalo
//                 clearInterval(myInterval);
//             }

//         }, 1000);       
//     }); 
// }

