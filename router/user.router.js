const express = require('express');
const router = express.Router();
const UserController = require("../controller/user.controller");

//reouters 

//User router 
router.get('/users',UserController.getUserDetails);
router.post('/signUp',UserController.storeUserDetails);
router.get('/user/:username/:password',UserController.getUserByUsername);
router.delete('/user/:username',UserController.deleteUser);
router.put('/user/update',UserController.updateUser);
module.exports = router;        