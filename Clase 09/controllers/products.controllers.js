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

function formCreateProduct(req, res) {
    res.send(view.generateNewProductForm())
}

function createProduct(req, res) {
    let product = {
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price)
    }

    service.createProduct(product)
        .then(function (product) {
            res.send(view.generatePage('Producto Creado', `<h1>Producto creado con exito</h1>`))
        })
        .catch(function (err) {
            res.send(view.generatePage('Error al crear producto', `<h1>${err}</h1>`))
        })

}

export {
    getProducts,
    getProductById,
    formCreateProduct,
    createProduct
}