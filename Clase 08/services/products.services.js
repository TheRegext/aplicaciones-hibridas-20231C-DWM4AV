import { readFile } from 'node:fs/promises'


async function getProducts() {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data)
        })
        .catch(function (err) {
            return []
        })
}

async function getProductById(id) {
    return getProducts()
        .then(function (products) {
            let product = null

            for (let i = 0; i < products.length; i++) {
                if (products[i].id == id) {
                    product = products[i]
                    break
                }
            }

            return product
        })
}

export {
    getProducts,
    getProductById
}