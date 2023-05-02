import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteAPI from './api/routes/products.api.routes.js'

const app = express() // crea el servidor utilizando express

// configuracion del servidor
app.use(express.urlencoded({ extended: true })) // permite recibir datos de formularios
app.use(express.json()) // permite recibir los datos en formato JSON
app.use('/', express.static('public')) // permite acceder a los archivos estaticos

app.use(ProductRoute)
app.use('/api', ProductRouteAPI)

app.listen(2023, function () {
    console.log('Server is running in http://localhost:2023')
})
