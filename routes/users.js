const express = require("express");
const router = express.Router();
const { createUser, loginUser, getRole, updateUser, createAdmin ,getAllUsers } = require("../controller/userController");

router.post('/createuser', createUser);
router.get('/getAllUsers', getAllUsers);
router.post('/login', loginUser);
router.get('/role/:email', getRole);
router.put('/updateuser/:id', updateUser);
router.put("/createAdmin/:id", createAdmin);
module.exports = router;
