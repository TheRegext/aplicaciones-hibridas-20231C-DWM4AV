import { Router } from "express"
// import * as service from '../../services/account.services.js'
import * as controller from '../controllers/account.controllers.js'
import * as validate from '../../middlewares/account.validate.middleware.js'


const router = Router()

// registrarse
// /account/regiter
router.post('/account', [validate.validateAccount], controller.createAccount)

router.post('/account/login', [validate.validateAccount], controller.login)



export default router