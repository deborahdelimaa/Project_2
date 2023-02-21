const express = require("express");
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')
const mongoose = require("mongoose");
const User = require("../models/User.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
/* const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn"); */

router.get("/profile", isLoggedIn, async (req, res, next) => {
  const user = req.session.currentUser
  console.log(user)
  try {
    res.render("private/profile", { user });
  } catch (error) {
    next(error)
  }
});


router.get("/edit-profile/:id", async (req, res, next) => {
  const user = req.session.currentUser
  const {id} = req.params
  console.log(user)
  try {
    await User.findOne({id: id})
    res.render("private/editProfile", { user });
  } catch (error) {
    next(error)
  }
});


router.post("/edit-profile/:id", fileUploader.single("image"), async (req, res, next) => {
  
  const {id} = req.params
  const { username, email, password, bio } = req.body;
    try {

      if (req.file) {
       const newUser = await User.findByIdAndUpdate(id,{
          username,
          email,
          password,
          bio,
          image: req.file.path,
        }, {new: true});
        req.session.currentUser = newUser
        res.redirect("/profile");
      } else {
        const newUser = await User.findByIdAndUpdate(id, {
          username,
          email,
          password,
          bio,

        }, {new: true});
        /* const newUser = req.session.currentUser */
        req.session.currentUser = newUser
        res.redirect("/profile");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);





module.exports = router;