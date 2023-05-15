function suma(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

function sumaPares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 == 0) ? array[i] : 0
    }
    return suma
}

function sumaImpares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 != 0) ? array[i] : 0
    }
    return suma
}

let array = [5, 3, 6, 9, 8, 4]
console.log("La suma es: ", suma(array))

console.log("La suma de los pares es: ", sumaPares(array))

console.log("La suma de los impares es: ", sumaImpares(array))