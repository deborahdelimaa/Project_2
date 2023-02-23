const express = require("express");
const Recipe = require("../models/Recipe.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
// Display all the recipes

router.get("/recipes", isLoggedIn, async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.render("private/recipes", { recipes });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// create new recipes

router.get("/create-recipe", isLoggedIn, (req, res) =>
  res.render("private/create-recipe")
);

router.post(
  "/create-recipe",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      const { name, duration, ingredients, preparation } = req.body;
      const userId = req.session.currentUser._id;

      if (req.file) {
        const myRecipe = await Recipe.create({
          name,
          duration,
          ingredients,
          preparation,
          image: req.file.path,
        });

        await User.findByIdAndUpdate(
          userId,
          { $push: { recipes: myRecipe._id } },
          { new: true }
        );

        res.redirect("/recipes");
      } else {
        const myRecipe = await Recipe.create({
          name,
          duration,
          ingredients,
          preparation,
        });
        await User.findByIdAndUpdate(
          userId,
          { $push: { recipes: myRecipe._id } },
          { new: true }
        );

        res.redirect("/recipes");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);
router.post(
  "/recipe-details/:id/delete",
  isLoggedIn,
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const recipes = await Recipe.findByIdAndRemove(id);
      res.redirect("/recipes");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/recipe-details/:id", isLoggedIn, async (req, res, next) => {
  try {
    const currentUser = req.session.currentUser._id;

    const user = await User.findById(currentUser);
    const recipes = await Recipe.findById(req.params.id);


    res.render("private/recipe-details", { recipes, user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
