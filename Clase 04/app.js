
// CommonJS: Modulos

/*
const http = require('node:http');

const pages = require('./pages/utils.js') // importa el modulo
const products = require('./data/products.js')
*/

// ES6: Modulos
import http from 'node:http'

// importo por defecto los productos
import products from './data/products.js'

// en pages voy a tener todas las funciones que exporte en utils.js, siempre que se hayan exportado por default
// import pages from './pages/utils.js'
import { generatePage } from './pages/utils.js'

// response.write: Escribir en el body del mensaje de respuesta
const server = http.createServer(function (request, response) {
    console.log("URL", request.url)

    if (request.url === "/") {
        response.write(generatePage("Inicio", "<p>Ernesto Porta Brenes</p>"))
    }
    else if (request.url === "/materia") {
        response.write(generatePage("Materia", "<p>Aplicaciones hibridas</p>"))
    }
    else if (request.url === "/profesor") {
        response.write(generatePage("Profesor", "<p>Brian Esteban Lara Campos</p>"))
    }
    else if (request.url === "/productos") {
        let content = '<p>Lista de productos</p><ul>'

        for (let i = 0; i < products.length; i++) {
            content += '<li>' + products[i].name + '</li>'
        }

        content += '</ul>'
        response.write(generatePage("Productos", content))
    }
    else {
        response.write(generatePage("Error", "<p>404 - Pagina no encontrada</p>"))
    }
    response.end()
});

server.listen(2022)