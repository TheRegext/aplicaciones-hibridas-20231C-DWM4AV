import API from './api.service'

async function login({ email, password }) {
    return API.call({ uri: 'session', method: 'POST', body: { email, password } })
}

export {
    login
}