/* //chiediamo all'utente pari o dispari e un numero da 1 a 5
let eoUser = prompt("Pari o dispari?");
let userNumber = parseInt(prompt("Scegli un numero intero da 1 a 5"));

while (isNaN(userNumber)){
    alert("Numero inserito non valido!");
    userNumber = parseInt(prompt("Scegli un numero intero da 1 a 5"));
}

//generiamo numero random per il computer tramite la function randomNumber
let computerNumber = randomNumber(1, 5)

//sommiamo i numeri 
let sumNumbers = userNumber + computerNumber;


//stabiliamo vincitore tramite la function winnerIs
let vincitore = winnerIs(eoUser, sumNumbers);

alert(`Il numero del computer è ${computerNumber}, la somma è ${sumNumbers}. Quindi il vincitore è: ${vincitore}`)
 */

const main = document.querySelector("main");
let numberInput = document.createElement("div");
numberInput.classList.add("d-flex", "justify-content-center");


const btnPari = document.querySelector(".btn-light");
const btnDispari = document.querySelector(".btn-dark");

btnPari.addEventListener("click", function () {
    eoUser = "pari";
    completedGame(eoUser);
})

btnDispari.addEventListener("click", function () {
    eoUser = "dispari";
    completedGame(eoUser);
})



/**********************************************************/
/* Functions */
/**********************************************************/
/**
 * Returns a random number between minValue and maxValue
 * @param {number} minValue rappresenta il limite inferiore (incluso) dell'intervallo entro cui voglio generare il numero random
 * @param {number} maxValue rappresenta il limite superiore (incluso) dell'intervallo entro cui voglio generare il numero random
 */
function randomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}


/**
 * Returns the winner of odd or even game 
 * @param {string} evenOrOdd rappresenta il valore "pari" o "dispari" scelto dall'utente
 * @param {number} sumNumbers rappresenta la somma dei valori dell'utente e del computer
 * @returns 
 */
function winnerIs(evenOrOdd, sumNumbers) {
    let winner;

    if ((evenOrOdd === "pari" && sumNumbers % 2 === 0) || (evenOrOdd === "dispari" && sumNumbers % 2 === 1)) {
        winner = "l'utente";
    } else {
        winner = "il computer";
    }

    return winner;
}


/**
 * 
 * @param {string} eoUser - rappresenta il valore "pari" o "dispari"
 */

function completedGame(eoUser) {
    numberInput.innerHTML = `<div class="input-group w-25">
    <input type="text" class="form-control" id="user-word" placeholder="Inserisci un numero intero da 1 a 5...">
    <button class="btn btn-outline-secondary" type="button" id="check-btn">Vai!</button>
    </div>`
    main.append(numberInput);

    const checkBtn = document.getElementById("check-btn");
    checkBtn.addEventListener("click",function(){
        let userNumber = parseInt(document.getElementById("user-word").value);
        let computerNumber = randomNumber(1, 5)
        let sumNumbers = userNumber + computerNumber;
        let vincitore = winnerIs(eoUser, sumNumbers);
        
        const winnerText = document.createElement("h3");
        winnerText.classList.add("text-center", "my-3");
        winnerText.textContent = `Il numero del computer è ${computerNumber}, la somma è ${sumNumbers}. Quindi il vincitore è ${vincitore}`;
        main.append(winnerText);
    })

}