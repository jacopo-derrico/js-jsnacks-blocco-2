//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
let numberList = []
let numberSum = 0

while (numberSum < 50) {
    let numbers = parseInt(prompt("Enter a number"))
    
    numberList.push(numbers)

    numberSum += numbers

    console.log("numero inserito: " + numbers)
}
console.log("Lista numeri: " + numberList)
console.log("Somma dei numeri: " + numberSum)