const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/User.model");

/* const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn"); */

router.get("/profile", async (req, res) => {
    res.render("private/profile");
  });

module.exports = router;