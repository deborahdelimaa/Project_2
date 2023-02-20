const express = require("express");
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')
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


router.get("/edit-profile", async (req, res, next) => {
  const user = req.session.currentUser
  try {
    res.render("private/editProfile", { user });
  } catch (error) {
    next(error)
  }
});


router.post(
  "/edit-profile",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      const { username, email, password, bio } = req.body;

      if (req.file) {
        await User.findByIdAndUpdate({
          username,
          email,
          password,
          bio,
          image: req.file.path,
        });
        res.redirect("/profile");
      } else {
        await User.findOneAndUpdate({
          username,
          email,
          password,
          bio,
          image: req.file.path,
        });
        res.redirect("/profile");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

/* router.get('/profile', async (req, res) => {
  const user = req.session.currentUser
  try {
    
    res.render('private/editProfile', { user });
  } catch (error) {
    next(error);
  }
});
router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('private/editProfile', user);
  } catch (error) {
    next(error);
  }
}); */

/* router.post('/profile/:id', fileUploader.single('imageUrl'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, password, bio, favoriteRecipes } = req.body;
    let imageUrl;

    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = currentImage;
    }

    await Movie.findByIdAndUpdate(id, { username, email, password, bio, favoriteRecipes, imageUrl });

    res.redirect('private/profile');
  } catch (error) {
    console.log(error);
    next(error);
  }
});
 */



module.exports = router;