/*
Instrucciones:
Agregue una etiqueta <script> en la parte inferior de la página para su código

Crear una funcion que resuelva cada una de las operaciones

Al dar clic a cada uno de los botones calcular la operacion correspondiente y pintar el resultado en el #solution
BONUS!

Hacer que el calculo de la operación se haga cuando se presione la tecla que viene en el comentario

Recuerden que para detectar teclas el evento es onkeypress para inline y atributo... y keypress para addEventListener */

const squareButton = document.getElementById('square-button');

function getSquare(){
    const square = document.getElementById('square').value;
    solution.innerHTML = `Este es el cuadrado ${square*square}`;
}

function pressA(e){
    if(e.key ==='p' || e.key ==='P'  )
    {
        getSquare();
    }
}
squareButton.addEventListener('click', getSquare);
document.getElementById("square").addEventListener("keypress", pressA);

// squareButton.addEventListener('click', 'keypress', getSquare, (e)  => {
//     if(e.data==='a')
//     {
//         getSquare();
//     }
//   });

//quiero hacer que se puedean ejecutar varios eventos a la vez  
//squareButton.addEventListener('click, keypress', getSquare, pressA);


//despues la funcion en el evento de dos formas con function y =>
//***************************************************** 
const halfButton = document.getElementById('half-button');

function getHalf(){
    const half = document.getElementById('half').value;
    solution.innerHTML = `Esta es la mitad ${half/2}`;
}
halfButton.addEventListener('click', getHalf);
//se añadio funcion dentro de la declaración

document.getElementById('half').addEventListener('keypress', (e)=>{
    if(e.key==='b' || e.key==='B' )
    {
        getHalf();
    }
})

//***************************************************** 
const percentButton = document.getElementById('percent-button');

function getPercent(){
    const percentage = document.getElementById('percentage').value;
    const entireValue = document.getElementById('entireValue').value;
    
    solution.innerHTML = `El ${percentage}% de ${entireValue} es de: ${entireValue*(percentage/100)}`;
}
percentButton.addEventListener('click', getPercent);
document.getElementById("percentage").addEventListener('keypress', function(e){
    if(e.key==='c' || e.key==='C')
    {
        getPercent();
    }
} ); 

//***************************************************** 
const areaButton = document.getElementById('area-button');

function getArea(){
    const radius = document.getElementById('radius').value;
    
    solution.innerHTML = `El área del circulo es: ${Math.PI*(radius*radius)}`;
}

areaButton.addEventListener('click',getArea);

function pressD(){
    document.getElementById('radius').addEventListener('keypress', (e)=>{
         if(e.key==='d' || e.key==='D')
         {
            getArea();
         }
    });
}