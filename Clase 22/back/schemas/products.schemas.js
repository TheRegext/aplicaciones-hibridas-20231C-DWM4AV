import yup from 'yup'

const product = yup.object({
    name: yup.string().required(),
    price: yup.number().required().positive(),
    description: yup.string().required(),
    tags: yup.array().of(yup.string())
})

const productUpdate = yup.object({
    name: yup.string(),
    price: yup.number().positive(),
    description: yup.string(),
    tags: yup.array().of(yup.string())
})

export {
    product,
    productUpdate
}