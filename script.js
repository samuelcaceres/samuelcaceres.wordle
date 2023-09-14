let intentos = 5;
let palabra;

fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        palabra = response[0].toUpperCase()
    })
    .catch(err => console.log(err));

const button = document.getElementById("intentar");
button.addEventListener("click", intentar);

function intentar() {
    console.log("Intento!")
}

const input = document.getElementById("entrada");
const valor = input.value;

function intentar() {
    const INTENTO = leerIntento();

    if (!INTENTO) {
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { 
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;

    if (intentos === 0 || INTENTO === palabra) {
        terminar(INTENTO === palabra ? "<h1>GANASTE!</h1>" : "<h1>PERDISTE!</h1>");
    }
}

function leerIntento(){
    let intento = document.getElementById("entrada");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("entrada");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
