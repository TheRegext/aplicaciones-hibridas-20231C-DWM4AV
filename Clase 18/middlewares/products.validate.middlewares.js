import * as productScheme from '../schemes/products.schemes.js'

function validateProduct(req, res, next) {
    productScheme.product.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next()
        })
        .catch(function (err) {
            return res.status(500).json({ err })
        })
}

function validateProductUpdate(req, res, next) {
    productScheme.productUpdate.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next()
        })
        .catch(function (err) {
            return res.status(500).json({ err })
        })
}

export {
    validateProduct,
    validateProductUpdate
}