// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro

// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


// creo 2 array 
const firstArray = ["a", "b", "c"];
const secondArray = [1, 2, 3];


// riusltato 
const result = combineArray(firstArray, secondArray);



// mostro i due array e il risultato in pagina 

document.getElementById("show-array").innerHTML = `${firstArray} <br> ${secondArray}`;

document.getElementById("result").innerHTML = result;


// FUNZIONI 

// funzione che abbia i 2 parametri 
function combineArray(arrOne, arrTwo){

    // creo un array vuoto nel quale inserire i 2 array
    const arrayCombined = [];

    // inizializzo una variabile a zero per le iterazioni
    let i = 0;

    // finchè il numero di iterazioni è minore alla lunghezza di uno dei due array (essendo entrambi lunghi uguali)
    while (i < arrOne.length) {

        // aggiungi gli elementi 
        arrayCombined.push(arrOne[i], arrTwo[i]);
        // aumenta le iterazioni 
        i++;   
    }

    // ritorna il valore dell'array combinato 
    return arrayCombined;
}