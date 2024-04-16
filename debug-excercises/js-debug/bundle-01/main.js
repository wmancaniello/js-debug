/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// Questo è un ciclo for che dobrebbe stampare i numeri da 1 a 5, ma c'è un errore, ovvero il simbolo i > 5, dovrebbe essere <, altrimenti non stamperà nulla.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// E' una funzione che dice che se il numero è pari, tocca aggiungere +5, ma non funziona perchè ci vorrebbe === e non solo =.

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// Funzione che dovrebbe stampare i numeri da 0 a 4, ma c'è un errore di sintassi, ovvero il " ; " dopo lo 0.

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//  Funzione che dovrebbe restituire solo i numeri pari dell'array fornito
// errore num. 1
// errore num. 2
// errore num. 3
// errore num. 4
// errore num. 5
// errore num. 6
// errore num. 7