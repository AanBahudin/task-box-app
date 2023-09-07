import express from 'express'
const router = express.Router()

import { updateUser, getUserInfo } from '../controllers/userController.js'
import { updateUserValidation } from '../middleware/inputValidationMiddleware.js'

router.route('/current-user').get(getUserInfo)
router.route('/update-user').patch(updateUserValidation, updateUser)

export default router