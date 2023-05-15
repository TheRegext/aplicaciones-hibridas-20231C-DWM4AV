function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

let array = [5, 3, 6, 9, 8, 4]

console.log("La suma es: ", sumar(array, e => e))

console.log("La suma de los pares es: ", sumar(array, e => e % 2 == 0 ? e : 0))

console.log("La suma de los impares es: ", sumar(array, e => e % 2 != 0 ? e : 0))

/*
///
function tradicional() {
    return 0
}
//
// tiene contexto, funcion creadora
let expresion = function () {
    return 0
}

// no tiene contexto, no es una funcion creadora
let flecha = (e) => {
    return 0
}

function(e, j){
    return e + j
}
/// funciones lambda
let flecha2 = (e, j) => e + j

*/