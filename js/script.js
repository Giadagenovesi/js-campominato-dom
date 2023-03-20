// Creare una griglia 10x10 con i numeri da 1 a 100
// Per ogni numero generato genero le caselle della griglia
// Ogni volta che clicco su un quadrato questo si colora di azzurro.
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

// Dichiarazioni:
let numberOfSquares = "";
const difficultSelector = document.getElementById("difficult");
const playBtn = document.querySelector(".play-btn")
const grid = document.querySelector(".grid");


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
}) 
  
///////////////////////////////////////////////////////
// FUNCTION

//Al click del utente cambia il colore dello sfondo del quadrato
function userClick() {
    this.classList.add("lightblue");
    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);
}


