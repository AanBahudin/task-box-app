import express from 'express'
const router = express.Router()

import { updateUser, getUserInfo } from '../controllers/userController.js'

router.route('/current-user').get(getUserInfo)
router.route('/update-user').patch(updateUser)

export default router