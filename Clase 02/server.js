const http = require('node:http')

const server = http.createServer(function (request, response) {

    console.log("URL", request.url)

    if (request.url === "/") {
        response.write("Hola que hace!")
    }
    else if (request.url === "/pepito") {
        response.write("Hola que hace pepito!")
    }
    else {
        response.write("Pone algo en la url!")
    }

    response.end()
})

server.listen(2023)