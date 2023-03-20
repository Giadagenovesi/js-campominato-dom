// Creare una griglia 10x10 con i numeri da 1 a 100
// Per ogni numero generato genero le caselle della griglia
// Ogni volta che clicco su un quadrato questo si colora di azzurro.
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

// Dichiarazioni:
let numberOfSquares = "";
const difficultSelector = document.getElementById("difficult");
const playBtn = document.querySelector(".play-btn")
const grid = document.querySelector(".grid");
let bombs = "";
//Creo 1 arrey vuoto dei numeri cliccati dall'utente
let clickedNumberArrey = [];

// Al click ell'utente sul bottone si genera la griglia in base alla difficoltà scelta
playBtn.addEventListener("click", function() {
    grid.innerHTML = "";
    if (difficultSelector.value === "easy") {
        numberOfSquares = 100; 
    } else if (difficultSelector.value === "medium") {
        numberOfSquares = 81;
    } else {
        numberOfSquares = 49;
    }
    for (let i = 1; i <= numberOfSquares; i++) {
        const square = document.createElement ("div");
        square.classList.add("square", difficultSelector.value);
        square.innerHTML = `<span>${i}</span>`;
        //Al click sul singolo quadrato cambia il colore di sfondo e appare il numero nella console
        square.addEventListener("click", userClick) 
        grid.append(square);
    }
    //Generazione delle bombe
    bombs = generateBombs(16, numberOfSquares);
    console.log(bombs);
}) 
  
///////////////////////////////////////////////////////
// FUNCTION

/**
 * Description Funzione che genera un numero random da 1 a maxBombsNumber,senza ripetizioni
 * @param {number} numbersQuantity
 * @param {number} maxBombsNumber
 * @returns {array}
 */
function generateBombs(numbersQuantity, maxBombsNumber) {
    //creo un array vuoto
    //finchè la lunghezza dell'array è < di numbersQuantity
    //genero numero random
    //SE il numero non è nell'array lo pusho
    const numbers = [];
    while (numbers.length < numbersQuantity) {
        const rndNumber = getRndInteger(1, maxBombsNumber);
        if (!numbers.includes(rndNumber)) {
            numbers.push(rndNumber);
        }
    }
    return numbers;   
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//Al click del utente cambia il colore dello sfondo del quadrato
function userClick() {
    
    //prendo il numero all'intero della cella cliccata
    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);
    //SE il numero è presente nell'arrey delle bombe
        //coloro la cella di rosso
        // stampo HAI PERSO
    if (bombs.includes(clickedNumber)) {
        this.classList.add("bomb")
        console.log("BOOM!! HAI TROVATO LA BOMBA, HAI PERSO!!");
    //ALTRIMENTI la cella diventa azzurra
    } else {
        this.classList.add("lightblue");
    }
    
    // SE il numero non è nell'arrey dei numeri cliccati
            
        //pusho il numero nell'arrey dei numeri cliccati
        //SE la lunghezza dell'arrey è uguale al numero di click massimo 
            //stampo HAI VINTO
    if (!clickedNumberArrey.includes(clickedNumber)) {
        clickedNumberArrey.push(clickedNumber);
    }
        
}


console.log(clickedNumberArrey);