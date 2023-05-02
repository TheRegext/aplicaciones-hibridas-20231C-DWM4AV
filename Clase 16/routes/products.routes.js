import express from 'express'

import * as controller from '../controllers/products.controllers.js'

const route = express.Router()

route.get('/products', controller.getProducts)

route.get('/products/nuevo', controller.formCreateProduct)
route.post('/products/nuevo', controller.createProduct)

route.get('/products/:idProduct/edit', controller.formEditProduct)
route.post('/products/:idProduct/edit', controller.editProduct)

route.get('/products/:idProduct/delete', controller.formDeleteProduct)
route.post('/products/:idProduct/delete', controller.deleteProduct)

route.get('/products/:idProduct', controller.getProductById)


export default route