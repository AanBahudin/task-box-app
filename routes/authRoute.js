import express from 'express'
const router = express.Router()

import { validateRegisterInput, validateLoginInput } from '../middleware/inputValidationMiddleware.js'
import { login, register, logout } from '../controllers/authController.js'

router.route('/login').post(validateLoginInput, login)
router.route('/register').post(validateRegisterInput, register)
router.route('/logout').get(logout)

export default router