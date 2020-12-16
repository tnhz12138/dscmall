const express = require("express");
const router = express.Router();


//引入控制器模块
const UserController = require("../controller/UsersConterller");

router.get("/userlist", UserController.UserList)
router.post("/edituser", UserController.Edituser)
router.post("/register", UserController.UserRegister)
router.post("/login", UserController.UserLogin)
router.post("/getcode", UserController.GetIdentifyingCode)
router.post("/phonelogin", UserController.PhoneLogin)
router.get("/captcha", UserController.SvgCaptcha)

module.exports = router;