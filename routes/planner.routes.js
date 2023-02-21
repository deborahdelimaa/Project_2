const express = require("express");
const Recipe = require("../models/Recipe.model");
const Calendar = require("../models/Calendar.model");
const User = require("../models/User.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
 
 
 
 router.get("/planner", (req, res)=> res.render("private/planner"))

 

 module.exports = router;
