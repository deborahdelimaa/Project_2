const express = require("express");
const Recipe = require("../models/Recipe.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
// Display all the recipes

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.render("private/recipes", { recipes });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// create new recipes

router.get("/create-recipe", isLoggedOut, (req, res) => res.render("private/create-recipe"));

router.post(
  "/create-recipe",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      const { name, duration, ingredients, preparation } = req.body;

      if (req.file) {
        await Recipe.create({
          name,
          duration,
          ingredients,
          preparation,
          image: req.file.path,
        });
        res.redirect("/recipes");
      } else {
        await Recipe.create({
          name,
          duration,
          ingredients,
          preparation,
        });
        res.redirect("/recipes");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);



router.get('/recipe-details/:id', async (req, res) => {
    try {
      const {id} = req.body
      const recipes = await Recipe.findById(req.params.id);
      res.render('private/recipe-details', {recipes});
    } catch (error) {
      next(error);
    }
  });





module.exports = router;
