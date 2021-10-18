//chiedo parola all'utente
const checkBtn = document.getElementById("check-btn");

let userWord;
checkBtn.addEventListener("click", function(){

    
    userWord = document.getElementById("user-word").value;
    console.log(userWord);
    console.log("La parola ha: " + userWord.length + " lettere");

    const wordPalindrome = isPalindrome(userWord);
    let msgPalindrome;
    let textColorClass;
    if (wordPalindrome){
        msgPalindrome = "è palindroma!";
        textColorClass = "text-success"
    } else{
        msgPalindrome = "non è palindroma!";
        textColorClass = "text-danger"
    }
    
    const main = document.querySelector("main");
    console.log(main);
    
    const textPalindrome = document.createElement("h2");
    textPalindrome.classList.add("text-center");


    textPalindrome.innerHTML = `La parola <span class="fst-italic">${userWord}</span> <span class="${textColorClass}">${msgPalindrome}</span>`;    
    main.append(textPalindrome); 
})


/**
 *
 * @param {string} word 
 * @returns 
 */
function isPalindrome(word) {
    //estraggo le singole lettere della parola e le inserisco in un array
    splitWord = word.split('');
    //console.log(splitWord);

    //inverto l'ordine degli elementi nell'array
    reverseWord = splitWord.reverse();
    //console.log(reverseWord);

    //creo e restituisco una nuova stringa concatenando tutti gli elementi nell'array 
    joinWord = reverseWord.join('');
    //console.log(joinWord);

    //controllo se la parola al contrario è uguale alla parola inizialmente inserita
    let palindrome = true; 

    if (joinWord != word) {
        palindrome = false;
    } 

    return palindrome;
}
