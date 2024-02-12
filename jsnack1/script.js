// Scrivi una funzione che accetti una stringa come argomento
// e la restituisca girata (es. "Ciao" -> "oaiC")


// prelevo gli elementi 
const btnElement = document.getElementById("formBtn");
const userWord = document.getElementById("formWord");

// al click 
btnElement.addEventListener("click", function(){
    
    // prelevo il valore inserito nel form
    const wordToRevert = userWord.value;

    // inverto la parola richiamando la funzione 
    const reverse = reverseWord(wordToRevert)

    console.log(reverse);
})

// creo una funzione per invertire le parole inserite
function reverseWord(word) {


    // con .split separo la parola in un array di lettere 
    // con .reverse inverto l'ordine delle lettere nell'array
    // con .join le unisco per creare la parola invertita 
    const reverse = word.split('').reverse().join('');


    return reverse;
}