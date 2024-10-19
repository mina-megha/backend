import { Router } from "express";
import * as controller from "../controller/user.controller"

const router = Router()


router.post('/',controller.register)
router.post('/list',controller.list)

export  default router