// Scrivi una funzione che accetti una stringa come parametro e 
// restituisca la stringa con i caratteri ordinati alfabeticamente


// prelevo gli elementi 
const btnElement = document.getElementById("formBtn");
const userWord = document.getElementById("formWord");

// al click 
btnElement.addEventListener("click", function(){
    
    // prelevo il valore inserito nel form
    const wordToOrder = userWord.value;

    const order = stringToOrder(wordToOrder);

    document.getElementById("result").innerText = order;
})


// FUNZIONI 
function stringToOrder(word){
    
    // con .split separo la parola in un array di lettere 
    // con sort ordino le lettere in ordine alfabetico
    // con .join le unisco per creare la parola invertita 

    const order = word.split('').sort().join('');

    return order;
}