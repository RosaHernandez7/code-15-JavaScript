

window.addEventListener("load",function(){
    //se ejecuta cada intervalo de tiempo
    let boton_iniciar = document.querySelector("#iniciar");
    let boton_detener = document.getElementById("detener");
   
    let tiempo = startIntervalo(); 
   
    function startIntervalo(){
        let tiempo= setInterval(function(){
        console.log("set interval ejecutando");
        
        },2000);
        //necesito que retorne el tiempo para deterlo 
        return tiempo;
    }
    
    //se ejcuta una vez despues de cierto tiempo
    
    let tiempo1= setTimeout(function(){       
        boton_detener.style.backgroundColor="red";
        console.log("boton rojo");        
    },5000);

    //inciar el intervalo
    boton_iniciar.addEventListener("click",(e)=>{
        startIntervalo();
        console.log("has iniciado el intervalo");
    });
    
    //detener el intervalo
    boton_detener.addEventListener("click",(e)=>{
        
        console.log("has detenido el intervalo");
        clearInterval(tiempo);
    });
    

    

})