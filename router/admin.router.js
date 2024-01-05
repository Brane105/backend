const express = require('express');
const router = express.Router();
const AdminController = require("../controller/admin.controller.js");

//reouters 

//Admin router 
router.get('/admin',AdminController.getAdminDetails)
module.exports = router;