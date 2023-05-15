function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

let array = [5, 3, 6, 9, 8, 4]
console.log("La suma es: ", sumar(array, function (e) {
    return e
}))

console.log("La suma de los pares es: ", sumar(array, function (e) {
    return e % 2 == 0 ? e : 0
}))

console.log("La suma de los impares es: ", sumar(array, function (e) {
    return e % 2 != 0 ? e : 0
}))