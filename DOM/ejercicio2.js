/*Instrucciones:
Agregue una etiqueta <script> en la parte inferior de la página para su código.
Agregue un evento al botón para que llame a una función hacerFrase cuando se haga clic.
En la función hacerFrase, recupere los valores actuales de los elementos del formulario, crea una frase a partir de ellos y envíela al elemento #story
Ej: "Anita lava la tina" */
const story = document.getElementById('story')
const actionButton = document.getElementById('lib-button')

function hacerFrase() {
    const complement = document.getElementById('complement')
    const verb = document.getElementById('verb')
    const name = document.getElementById('person')

    const phrase = `${name.value} ${verb.value} ${complement.value}`
    // story.textContent = phrase
    story.innerHTML = `<strong>La frase es:</strong> ${phrase}`
}

actionButton.addEventListener('dblclick', hacerFrase);
