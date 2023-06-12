import API from './api.service'

async function getCurrent() {
    return API.call({ uri: 'profile' })
}

export {
    getCurrent
}

export default {
    getCurrent
}