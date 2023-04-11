import { readFile, writeFile } from 'node:fs/promises'


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

async function createProduct(product) {

    const products = await getProducts()

    let newProduct = {
        ...product,
        id: products.length + 1
    }

    products.push(newProduct)

    await writeFile('./data/products.json', JSON.stringify(products))

    return newProduct

}

// mañana traer el modificar y el eliminar un producto

export {
    getProducts,
    getProductById,
    createProduct
}