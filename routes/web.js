import express from 'express'
import CookieController from '../controllers/CookieController.js'
const router=express.Router()
router.get('/setcookie',CookieController.setcookie)
router.get('/getcookie',CookieController.getcookie)
router.get('/deletecookie',CookieController.deletecookie)

export default router