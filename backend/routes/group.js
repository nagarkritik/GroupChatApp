const express = require('express')
const router=express.Router()
const groupController=require('../controllers/group')
const authenticateController = require('../authenticate/authenticate')


router.post('/creategroup',authenticateController.isAuthenticate, groupController.createGroup)
router.get('/getgroups',authenticateController.isAuthenticate, groupController.getGroups)



module.exports=router