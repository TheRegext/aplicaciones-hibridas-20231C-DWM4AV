import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHM")

async function getProducts(filter = {}) {
    await client.connect()
    const filterMongo = { deleted: { $ne: true } }

    if (filter?.price_min) {
        filterMongo.price = { $gte: parseInt(filter.price_min) }
    }

    if (filter?.description) {
        filterMongo.$text = { $search: filter.description }
    }

    if (filter?.tags) {
        filterMongo.tags = { $all: filter.tags.split(';') }
    }

    // devuelve los datos de la coleccion
    return db.collection("products").find(filterMongo).toArray()
}

async function getProductById(id) {
    await client.connect()

    return db.collection("products").findOne({ _id: new ObjectId(id) })
}

async function createProduct(product) {
    await client.connect()

    return db.collection("products").insertOne(product)
}

async function editProduct(id, product) {
    await client.connect()

    return db.collection("products").updateOne({ _id: new ObjectId(id) }, { $set: product })
}

async function replaceProduct(id, product) {
    await client.connect()

    return db.collection("products").replaceOne({ _id: new ObjectId(id) }, product)
}

async function deleteProduct(id) {
    await client.connect()

    return db.collection("products").deleteOne({ _id: new ObjectId(id) })
}

export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    replaceProduct
}