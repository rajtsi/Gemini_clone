const express = require("express");
const {
  registerContoller,
  loginController,
  logoutController,
  checkLogin,
} = require("../controllers/authcontroller");
//router object
const router = express.Router();

//routes
// REGISTER
router.post("/register", registerContoller);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

router.post("/loggedinCheck", checkLogin);

module.exports = router;