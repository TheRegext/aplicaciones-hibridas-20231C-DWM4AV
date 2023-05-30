import * as service from '../../services/account.services.js'

async function createAccount(req, res) {
    return service.createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: 'La cuenta fue creado correctamente' })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


async function login(req, res) {
    return service.login(req.body)
        .then((account) => {
            res.status(201).json({ message: 'Session iniciada correctamente', account })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


export {
    createAccount,
    login
}
