let imagenGrande = document.getElementById("imagenGrande");
let btn_sig = document.getElementById("btn-sig");
let mostrarImagen = document.createElement("img");

// let img_array = ["../img/pic1.jpg", "../img/pic2.jpg", "../img/pic3.jpg"];
let img_array = [];

for(let i=1;i<=6;i++)
{
    img_array.push("../img/pic"+i+".jpg");
}

var image = document.getElementById("aaa");
var index=1;
const myInterval = setInterval("slide()", 500);

function slide()
{   document["aaa"].src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    // index=0;
    clearInterval(myInterval);
    }
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



