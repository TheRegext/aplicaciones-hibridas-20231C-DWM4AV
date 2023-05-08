import express from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewRoute from './products.reviews.routes.js'

const route = express.Router()

route.get('/products', controller.getProducts)
route.post('/products', controller.createProduct)

route.get('/products/:idProduct', controller.getProductByID)
route.put('/products/:idProduct', controller.replaceProduct)
route.patch('/products/:idProduct', controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewRoute)

export default route