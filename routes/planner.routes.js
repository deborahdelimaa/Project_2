const express = require("express");
const Recipe = require("../models/Recipe.model");
const Calendar = require("../models/Calendar.model");
const User = require("../models/User.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
 
 
 
 router.get("/planner", (req, res)=> res.render("private/planner"));


 router.post("/planner", async (req, res, next) => {
    try {
      const {monday, tuesday, wednesday, thursday, friday, saturday, sunday} = req.body
      
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
 module.exports = router;
