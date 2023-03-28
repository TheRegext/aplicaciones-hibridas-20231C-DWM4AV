import express from 'express'
import path from 'node:path'

import { generatePage } from './pages/utils.js'

let contador = 0;

const app = express() // crea el servidor utilizando express

// configuracion del servidor
app.use(express.urlencoded({ extended: true })) // permite recibir datos de formularios
app.use('/', express.static('public')) // permite acceder a los archivos estaticos

// forma dinamica de crear rutas
app.get('/', function (req, res) {
    res.send(generatePage("Inicio", "<p>Ernesto Porta Brenes</p>"))
})

app.get('/count', function (req, res) {
    contador++;
    res.send('<h1>Contador: ' + contador + '</h1>')
})

// FORMULARIOS
// GET  - URL  - OBTENER UN RECURSO
// POST - BODY - CREAR UN RECURSO


// todo lo que se envia por la URL se llama QUERY PARAMS

// obteniendo el recuros saludo
app.get('/saludo', function (req, res) {
    let nombre = req.query.nombre
    res.send('<h1>Hola ' + nombre + '</h1>')
})

// creando un recurso saludo
app.post('/saludo', function (req, res) {


    let nombre = req.body.nombre
    res.send('<h1>Hola ' + nombre + '</h1>')


})



app.listen(2023, function () {
    console.log('Server is running in http://localhost:2023')
})
