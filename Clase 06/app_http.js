
// CommonJS: Modulos

/*
const http = require('node:http');

const pages = require('./pages/utils.js') // importa el modulo
const products = require('./data/products.js')
*/

// ES6: Modulos
import http from 'node:http'
import { readFile } from 'node:fs'; // agrega la funcion readFile al modulo FileSystem de node

// importo por defecto los productos
import products from './data/products.js'

// en pages voy a tener todas las funciones que exporte en utils.js, siempre que se hayan exportado por default
// import pages from './pages/utils.js'
import { generatePage } from './pages/utils.js'

// response.write: Escribir en el body del mensaje de respuesta
const server = http.createServer(function (request, response) {

    if (request.url === "/favicon.ico") {
        return
    }


    console.log("URL", request.url)

    if (request.url === "/") {
        response.write(generatePage("Inicio", "<p>Ernesto Porta Brenes</p>"))
        response.end()
    }
    else if (request.url === "/materia") {
        response.write(generatePage("Materia", "<p>Aplicaciones hibridas</p>"))
        response.end()
    }
    else if (request.url === "/profesor") {
        response.write(generatePage("Profesor", "<p>Brian Esteban Lara Campos</p>"))
        response.end()
    }
    else if (request.url === "/productos") {
        let content = '<p>Lista de productos</p><ul>'

        for (let i = 0; i < products.length; i++) {
            content += '<li>' + products[i].name + '</li>'
        }

        content += '</ul>'
        response.write(generatePage("Productos", content))
        response.end()
    }
    else if (request.url === "/hola.html") {
        // leer el archivo public/hola.html
        readFile('./public/hola.html', function (err, data) {

            // si hay un error
            if (err) {
                response.write(generatePage("Error", "<p>No pudo leer hola.html</p>"))
            }
            else {
                console.log("Accedo al Archivo")
                // enviar al cliente el contenido
                response.write(data)
            }
            response.end()
        })

    }
    else if (request.url === "/contact.html") {
        // leer el archivo public/hola.html
        readFile('./public/contact.html', function (err, data) {

            // si hay un error
            if (err) {
                response.write(generatePage("Error", "<p>No pudo leer hola.html</p>"))
            }
            else {
                console.log("Accedo al Archivo")
                // enviar al cliente el contenido
                response.write(data)
            }
            response.end()
        })


    }
    else if (request.url === "/index.html") {
        // leer el archivo public/hola.html
        readFile('./public/index.html', function (err, data) {

            // si hay un error
            if (err) {
                response.write(generatePage("Error", "<p>No pudo leer hola.html</p>"))
            }
            else {
                console.log("Accedo al Archivo")
                // enviar al cliente el contenido
                response.write(data)
            }
            response.end()
        })

    }
    else if (request.url === "/products.html") {
        // leer el archivo public/hola.html
        readFile('./public/products.html', function (err, data) {

            // si hay un error
            if (err) {
                response.write(generatePage("Error", "<p>No pudo leer hola.html</p>"))
            }
            else {
                console.log("Accedo al Archivo")
                // enviar al cliente el contenido
                response.write(data)
            }
            response.end()
        })

    }
    else if (request.url === "/css/style.css") {
        // leer el archivo public/hola.html
        readFile('./public/css/style.css', function (err, data) {

            // si hay un error
            if (err) {
                response.write(generatePage("Error", "<p>No pudo leer hola.html</p>"))
            }
            else {
                console.log("Accedo al Archivo")
                // enviar al cliente el contenido
                response.write(data)
            }
            response.end()
        })

    }
    else {
        response.write(generatePage("Error", "<p>404 - Pagina no encontrada</p>"))
        response.end()
    }
    console.log("Fin de la peticion")
});

server.listen(2022)