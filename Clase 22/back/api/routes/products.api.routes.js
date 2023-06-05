import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewsRoute from './products.reviews.routes.js'
import { validateProduct, validateProductUpdate } from '../../middlewares/products.validate.middlewares.js'
import { tokenVerify } from '../../middlewares/token.validate.middleware.js'

const route = Router()

// route.[VERBO]('[IDENTIFICADOR DEL RECURSO]', [CONTROLADOR])
// /products es la lista de productos
/*
route.use('/products/*', function (req, res, next) {
    console.log("Accediron a los productos")
    next()
})
*/
route.use('/products', [tokenVerify])

route.get('/products', controller.getProducts)

route.post('/products', [validateProduct], controller.createProduct)

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', [validateProduct], controller.replaceProduct)
route.patch('/products/:idProduct', [validateProductUpdate], controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewsRoute)


export default route