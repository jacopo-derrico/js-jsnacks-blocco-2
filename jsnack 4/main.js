//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let insertNumber = parseInt(prompt("Inserisci un numero"))
let result = document.getElementById('result')

if (insertNumber % 2 === 0) {
    result.innerHTML = insertNumber
} else {
    result.innerHTML = insertNumber + 1
}