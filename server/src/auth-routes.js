const express = require("express");

const router = express.Router();
const authCtrl = require("./auth-controller");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/verifyotp", authCtrl.verifyOTP);
router.post("/admin", authCtrl.admin);
router.get("/users", authCtrl.users);

module.exports = router;
