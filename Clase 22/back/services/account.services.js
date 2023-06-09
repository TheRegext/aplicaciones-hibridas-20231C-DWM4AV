import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHM")
const accounts = db.collection('accounts')

async function createAccount(account) {
    await client.connect()

    const accountExist = await accounts.findOne({ userName: account.userName })

    if (accountExist) {
        throw new Error('El nombre usuario ya se encuentra en uso.')
    }

    const newAccoutn = {
        ...account
    }

    const salt = await bcrypt.genSalt(10)

    newAccoutn.password = await bcrypt.hash(account.password, salt)

    await accounts.insertOne(newAccoutn)
}


async function login(account) {
    await client.connect()

    const accountExist = await accounts.findOne({ userName: account.userName })

    if (!accountExist) {
        throw new Error('El usuario no existe')
    }

    const isMatch = await bcrypt.compare(account.password, accountExist.password)

    if (!isMatch) {
        throw new Error('Password incorrecto')
    }

    return { ...accountExist, password: undefined }
}

export {
    createAccount,
    login
}