import * as view from '../views/products.views.js'
import * as service from '../services/products.services.js'

function getProducts(req, res) {
    service.getProducts()
        .then(function (products) {
            res.send(view.generateListProducts(products))
        })
}

function getProductById(req, res) {
    let id = req.params.idProduct

    service.getProductById(id)
        .then(function (product) {

            if (product) {

                res.send(view.generateProductDetail(product))
            }
            else {
                res.send(view.generatePage('Detalle de Producto', `<h1>Producto no encontrado</h1>`))
            }
        })
}

export {
    getProducts,
    getProductById
}