import express from 'express'
const router = express.Router()

import { updateUser, getUserInfo } from '../controllers/userController.js'
import { updateUserValidation } from '../middleware/inputValidationMiddleware.js'
import upload from '../middleware/multerMiddleware.js'

router.route('/current-user').get(getUserInfo)
router.route('/update-user').patch(upload.single('avatar'), updateUserValidation, updateUser)

export default router