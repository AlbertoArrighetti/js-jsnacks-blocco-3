// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).



// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
const numbersArray = [0, 1, 2, 3, 4, 5, 6];


const arrayPortion = selector(numbersArray, 2, 4);

console.log(arrayPortion);



// FUNZIONI


// La nostra funzione viene dichiarata ad esempio così 
// function tagliaArray(array, posizioneMin, posizioneMax)
function selector(array, min, max) {
  
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
    // con il metodo .slice prelevo una porzione dell'array
    // va aggiunto +1 siccome in .slice l'indice massimo non è incluso

    // in questo caso min e max sono i valori da inserire, per il primo numero = min e il secondo = max(incluso)
    const arrayPortion = array.slice(min, max + 1);

    return arrayPortion;
}