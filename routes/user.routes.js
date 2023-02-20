const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/User.model");

/* const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn"); */

router.get("/profile", async (req, res, next) => {
  const user = req.session.currentUser
  try {
    res.render("private/profile", { user });
  } catch (error) {
    next(error)
  }
});
/* router.post("/profile", fileUploader.single("image"), async (req, res, next)=>{
    try {
        const {username, email, password } = req.body;
        let image;
        if (req.file){
            image = req.file.path;
        } else {
            image = "https://www.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg"
        }
        await Recipe.create({username, email, password, image})
        res.redirect("/edit/profile")
    } catch (error) {
        console.log(error)
        next(error)
    }
}) */

router.get('/editProfile', async (req, res) => {
  const user = req.session.currentUser
  try {
    
    res.render('private/editProfile', { user });
  } catch (error) {
    next(error);
  }
});




module.exports = router;