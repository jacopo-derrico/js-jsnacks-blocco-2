//Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomNumber = randomizer(1, 100)
console.log(randomNumber)
let inputNumberHTML = 0

while (inputNumberHTML !== randomNumber) {
    inputNumberHTML = parseInt(prompt("Indovina il numero"))

    if (inputNumberHTML < randomNumber) {
        console.log(inputNumberHTML + ": il numero scelto è più basso")
        alert(inputNumberHTML + ": il numero scelto è più basso")
    } else if (inputNumberHTML > randomNumber) {
        console.log(inputNumberHTML + ": il numero scelto è più alto")
        alert(inputNumberHTML + ": il numero scelto è più alto")
    } else {
        console.log(inputNumberHTML + ": il numero è giusto!")
        alert(inputNumberHTML + ": il numero scelto è giusto!")
    }

    inputNumberHTML === randomNumber
}
