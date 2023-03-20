const http = require('node:http');

const PRODUCTOS = [
    {
        id: 1,
        name: "Café Expreso",
        price: 200
    },
    {
        id: 2,
        name: "Café Americano",
        price: 250
    },
    {
        id: 3,
        name: "Café Cortado",
        price: 200
    },
    {
        id: 4,
        name: "Café Doble",
        price: 250
    },
    {
        id: 5,
        name: "Café Lagrima",
        price: 200
    }
]


// response.write: Escribir en el body del mensaje de respuesta

const server = http.createServer(function (request, response) {
    console.log("URL", request.url)

    response.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Node.js</title></head><body>')

    response.write('<h1>Mi espectacular pagina web</h1>')

    if (request.url === "/") {
        response.write('<p>Ernesto Porta Brenes</p>')
    }
    else if (request.url === "/materia") {
        response.write('<p>Aplicaciones hibridas</p>')
    }
    else if (request.url === "/profesor") {
        response.write('<p>Brian Esteban Lara Campos</p>')
    }
    else if (request.url === "/productos") {
        response.write('<p>Lista de productos</p><ul>')

        for (let i = 0; i < PRODUCTOS.length; i++) {
            response.write('<li>' + PRODUCTOS[i].name + '</li>')
        }

        response.write('</ul >');
    }
    else {
        response.write('<p>404</p>')
    }
    response.write('</body></html>')
    response.end()
});

server.listen(2022)