import { Router } from "express";
import {  approveuser, deleteuser, delunverifiedusers,   getallusers, login ,registeruser,   } from "../controllers/user.controller.js";
import {upload} from '../middelwares/multer.middelware.js'
const router=Router()

router.route('/signup').post(upload.single('ss'),registeruser)
router.route('/login').post(login)
 
router.route('/delunverifiedusers').delete(delunverifiedusers)
// router.route('/updateprofile').post(updateprofile)
router.route('/approve').post(approveuser)
router.route('/getallusers').get(getallusers)
router.route('/deleteuser').post(deleteuser)
 

export default router