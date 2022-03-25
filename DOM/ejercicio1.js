const button = document.getElementsById('colorChange');
const eventFunction = function (){
    document.body.style= "background-color:red";
}
//(evento)

button.addEventListener("click",eventFunction, once =true);
button.addEventListener("dblclick", function(event){
    console.log(event);
    document.body.style ="background-color: blue";
}) 