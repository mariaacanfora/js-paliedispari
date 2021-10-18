//chiedo parola all'utente
let word = prompt("Inserisci una parola");

console.log("La parola ha: " + word.length + " lettere");

function isPalindroma(word) {
    //estraggo le singole lettere della parola e le inserisco in un array
    splitWord = word.split('');
    console.log(splitWord);

    //inverto l'ordine degli elementi nell'array
    reverseWord = splitWord.reverse();
    console.log(reverseWord);

    //creo e restituisco una nuova stringa concatenando tutti gli elementi nell'array 
    joinWord = reverseWord.join('');
    console.log(joinWord);

    //controllo se la parola al contrario è uguale alla parola inizialmente inserita
    let palindroma = true; 

    if (joinWord != word) {
        palindroma = false;
    } 

    return palindroma;
}

alert(`La parola ${word} è palindroma? ${word=isPalindroma(word)}`);