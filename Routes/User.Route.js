const express = require('express');
const router = express.Router();
const Users = require("../Controllers/User.Controller");

router.route("/users").get(Users.Get_All_Users);
router.route("/register").post(Users.Register_User);
router.route("/update/:id").put(Users.Update_User);
router.route("/delete/:id").delete(Users.Delete_user);

module.exports = router;