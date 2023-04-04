
// Funcion tradicional
async function A() {

    console.log('A')
    // throw "Error en la funcion B"

    return 5
}

/// una funcion async siempre retorna una promesa
async function B() {
    console.log('B')

    return A() // esta esperando a que la A se resuelva
        .then(function (dato) {
            return dato * 5
        })
}

async function C() {
    console.log('C')

    A() // no espera a que se resuelva la promesa

    return 10
}


async function D() {
    console.log('D')

    let dato = await A() // espera a que se resuelva la promesa

    return dato * 2
}

//console.log('B', B()) // <--- Promise { 5 }
// const promesa = B()
// se llama a una funcion como "callback" cunado dicha funcion es paratro de otra funcion
B()
    .then(function (dato) {
        // se ejecuta cuando la promesa se resuelve

        console.log('Termino bien', dato)

        //throw "Error en la funcion B"

        return dato * 2
    })
    .then(function (dato) {
        console.log('Termino bien 2', dato)
    })
    .catch(function (err) {
        // se ejecuta cuando la promesa se rechaza

        console.log('Termino mal')

        return 0
    })
    .finally(function () {
        // se ejecuta siempre

        console.log('Termino')
    })

console.log('C', C())

