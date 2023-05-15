function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

function todos(elemento) {
    return elemento
}

function pares(elemento) {
    return (elemento % 2 == 0) ? elemento : 0
}

function impares(elemento) {
    return (elemento % 2 != 0) ? elemento : 0
}

let array = [5, 3, 6, 9, 8, 4]
console.log("La suma es: ", sumar(array, todos))

console.log("La suma de los pares es: ", sumar(array, pares))

console.log("La suma de los impares es: ", sumar(array, impares))