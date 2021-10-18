//chiediamo all'utente pari o dispari e un numero da 1 a 5
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





/**********************************************************/
/* Functions */
/**********************************************************/
/**
 * Returns a random number between minValue and maxValue
 * @param {number} minValue rappresenta il limite inferiore (incluso) dell'intervallo entro cui voglio generare il numero random
 * @param {number} maxValue rappresenta il limite superiore (incluso) dell'intervallo entro cui voglio generare il numero random
 */
function randomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;
}


/**
 * Returns the winner of odd or even game 
 * @param {string} evenOrOdd rappresenta il valore "pari" o "dispari" scelto dall'utente
 * @param {number} sumNumbers rappresenta la somma dei valori dell'utente e del computer
 * @returns 
 */
function winnerIs(evenOrOdd, sumNumbers) {
    let winner;

    if ((evenOrOdd === "pari" && sumNumbers % 2 === 0) || (evenOrOdd === "dispari" && sumNumbers % 2 === 1)){
        winner = "utente";
    } else {
        winner = "computer";
    }

    return winner;
}
