const express = require("express")
const Recipe = require("../models/Recipe.model")
const router = express.Router()
const fileUploader = require('../config/cloudinary.config');


// Display all the recipes

router.get("/recipes", async (req, res)=> {
    try {
        const recipes = await Recipe.find();
        res.render("private/recipes", {recipes})
    } catch (error) {
        console.log(error)
        next(error)
    }
});

// create new recipes

router.get("/create-recipe", (req, res)=> res.render("private/create-recipe"));

router.post("/create-recipe", fileUploader.single("image"), async (req, res, next)=>{
    try {
        const {name, duration, ingredients, preparation} = req.body;
        let image;
        if (req,file){
            image = req.file.path;
        } else {
            image = "https://www.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg"
        }
        await Recipe.create({name, duration, ingredients, preparation, image})
        res.redirect("/recipes")
    } catch (error) {
        console.log(error)
        next(error)
    }
})





module.exports = router;