import * as service from '../../services/products.services.js'

function getProducts(req, res) {

    const filter = req.query

    service.getProducts(filter)
        .then(function (products) {
            res.status(200).json(products)// res.send(JSON.stringfy(products))
        })
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        tags: req.body.tags
    }

    service.createProduct(product)
        .then(function (newProduct) {
            res.status(201).json(newProduct)
        })
}

function getProductByID(req, res) {
    const idProduct = req.params.idProduct

    service.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idProduct}` } })
            }
        })

}

function replaceProduct(req, res) {
    let idProduct = req.params.idProduct

    let product = {
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price)
    }

    service.replaceProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idProduct}` } })
            }
        })
}

function updateProduct(req, res) {
    let idProduct = req.params.idProduct

    let product = {}

    if (req.body.name) {
        product.name = req.body.name
    }

    if (req.body.price) {
        product.price = req.body.price
    }

    if (req.body.description) {
        product.description = req.body.description
    }

    if (req.body.tags) {
        product.tags = req.body.tags
    }



    service.editProduct(idProduct, product)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idProduct}` } })
            }
        })
}



function deleteProduct(req, res) {
    let idProduct = parseInt(req.params.idProduct)

    service.deleteProduct(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encontro el producto #${idProduct}` } })
            }
        })
}
export {
    getProducts,
    createProduct,
    getProductByID,
    replaceProduct,
    updateProduct,
    deleteProduct
}