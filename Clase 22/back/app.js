import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'
import AccountRoute from './api/routes/account.api.routes.js'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import sharp from 'sharp'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'content/img/products')
    },
    filename: function (req, file, cb) {

        cb(null, req.params.idProduct + '.jpg')
    }
})

const upload = multer({ storage: storage })


//const upload = multer({ dest: 'uploads/' })

const app = express() // el server
app.use(cors()); // por defecto para que cualquiera pueda acceder al api

app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST de un formulario
app.use('/api', express.json()) // interpreta el body como JSON


app.use('/', express.static('public'))
app.use('/products/img', express.static('content/img/products'))

app.get('/products/:idProducts/img/1', [], function (req, res) {
    res.sendFile(path.resolve(`./content/img/products/${req.params.idProducts}.jpg`))
})

function resizeImage(req, res, next) {
    sharp(req.file.path)
        .resize(150)
        .jpeg({ quality: 50 })
        .toFile(path.resolve(`./content/img/products/thumbnail/${req.file.filename}`))
        .then(function (newFileInfo) {
            next()
        })
        .catch(function (err) {
            res.status(500).send({ error: err })
        })

}


app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)
app.use('/api', AccountRoute)

app.post('/:idProduct/upload', [upload.single('imagen_principal'), resizeImage], function (req, res) {
    console.log("Body:", req.body)
    console.log("Files:", req.file)

    // productService.addImage(req.params.idProduct, `/products/${req.params.idProduct}/img/${req.file.filename}`)

    res.send('Se recibió el archivo!')
})


app.listen(2023, function () {
    console.log('Servidor levantado! http://localhost:2023')
})
