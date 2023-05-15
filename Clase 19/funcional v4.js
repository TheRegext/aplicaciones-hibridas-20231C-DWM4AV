let array = [5, 3, 6, 9, 8, 4]

console.log("La suma es: ", array.reduce((previo, actual) => previo + actual, 0))

console.log("La suma de los pares es: ", array.reduce((previo, actual) => (actual % 2 == 0) ? previo + actual : previo, 0))

console.log("La suma de los impares es: ", array.reduce((previo, actual) => (actual % 2 != 0) ? previo + actual : previo, 0))

console.log("Primer Par: ", array.find((e) => e % 2 == 0))

console.log("Todo por 2: ", array.map((e, i) => `<li>#${i}: ${e}</li>`))

console.log("Todos Pares: ", array.filter(e => e % 2 == 0))

