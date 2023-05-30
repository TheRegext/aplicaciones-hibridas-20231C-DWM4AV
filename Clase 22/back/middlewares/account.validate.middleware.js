import * as scheme from '../schemas/account.schemas.js'

async function validateAccount(req, res, next) {
    return scheme.account.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then((account) => {
            req.body = account
            next();
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

export {
    validateAccount
}