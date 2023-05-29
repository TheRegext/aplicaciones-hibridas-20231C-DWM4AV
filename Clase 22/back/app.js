import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'
import cors from 'cors'

const app = express() // el server
app.use(cors()); // por defecto para que cualquiera pueda acceder al api

app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST de un formulario
app.use('/api', express.json()) // interpreta el body como JSON

app.use('/', express.static('public'))

app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)

app.listen(2023, function () {
    console.log('Servidor levantado! http://localhost:2023')
})