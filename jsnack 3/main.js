//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
let list1 = [23, 45, 67, 89, 12, 34, 56, 78, 90, 12];
let list2 = [12, 34, 56, 78, 90];

console.log(list1)
console.log(list2)

// for (list2.legnth = 5; list2.legnth < list1.length; list2.length === 10) {

//     list2.push(Math.floor(Math.random() * 100) + 1)

// }

for (let i = list2.length; i < list1.length; i++) {
    list2.push(Math.floor(Math.random() * 100) + 1)
 }
 
console.log(list2)