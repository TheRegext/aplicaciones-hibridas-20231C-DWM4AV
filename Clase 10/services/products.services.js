import { readFile, writeFile } from 'node:fs/promises'


async function getProducts(filter = {}) {
    return readFile('./data/products.json')
        .then(function (data) {
            return JSON.parse(data)
        })
        .then(function (products) {
            if (filter?.deleted) {
                const filterProduct = []
                for (let i = 0; i < products.length; i++) {
                    if (!products[i].deleted) {
                        filterProduct.push(products[i])
                    }
                }
                return filterProduct
            }

            return products
        })
        .catch(function (err) {
            return []
        })
}

async function saveProducts(products) {
    return writeFile('./data/products.json', JSON.stringify(products))
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

    await saveProducts(products)

    return newProduct
}

async function editProduct(id, product) {
    let isFound = false

    const products = await getProducts()
    const editedProduct = {
        ...product,
        id: id
    }

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i] = editedProduct
            isFound = true
        }
    }

    if (isFound) {
        await saveProducts(products)
        return editedProduct
    }
    else {
        return null
    }
}

async function deleteProduct(id) {
    const products = await getProducts()
    let deleteProduct = null

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products[i].deleted = true
            deleteProduct = products[i]
        }
    }

    await saveProducts(products)

    return deleteProduct
}


export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}