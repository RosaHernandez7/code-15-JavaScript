
function modificarColor(){
    const parrafo = document.getElementById('text');
    // parrafo.style="color:green; background-color:blue"
    parrafo.className="nuevoParrafo";
}

function addImage(){
    const img= document.createElement("img");
    img.src ="https://images.pexels.com/photos/10055307/pexels-photo-10055307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    document.body.appendChild(img);
}
function changeName(){
    let nameInput = document.querySelector('[name="fname"]');
    nameInput.value ="Rosa";
    let lastInput = document.querySelector('[name="lname"]');
    lastInput.value ="Hernandez";
}

// fondo letra e imagn