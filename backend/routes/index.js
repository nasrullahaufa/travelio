"use strict";

const router = require("express").Router();
const userController = require("../controllers/userController.js");
console.log('anj');
// halaman Home
router.get("/", (req, res) => {
  res.send("routed");
});

// setting routes


// router.post("/googlelogin", UserController.googleLogin);

// router.post("/login", ProductRouter);

module.exports = router;