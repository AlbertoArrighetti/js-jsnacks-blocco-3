// Scrivi una funzione che accetti una stringa come parametro e restituisca 
// la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita") / "Nel Mezzo Del Cammin Di Nostra Vita"



// prelevo gli elementi 
const btnElement = document.getElementById("formBtn");
const userWord = document.getElementById("formWord");

// al click 
btnElement.addEventListener("click", function(){
    
    // prelevo il valore inserito nel form
    const stringToUppercase = userWord.value;

    const uppercase = capitalUppercase(stringToUppercase);

    console.log(uppercase);

})


function capitalUppercase(string) {

    // divido la stringa in parole con uno split 
    // inserendo uno spazio in modo che prenda le parole e non le singole lettere
    const words = string.split(' ');

    // ciclo le lettere per individuare quelle con indice 0 di ogni parola
    for (let i = 0; i < words.length; i++) {

        // prelevo solo la prima lettera in una parola e la trasformo in maiuscolo 
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();      
    }

    // unisco le parole
    // join come split dovrà avere uno spazio nel mezzo in modo che le parole non si uniscano
    return words.join(' ');
}