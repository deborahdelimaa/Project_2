const express = require("express");
const Recipe = require("../models/Recipe.model");
const Calendar = require("../models/Calendar.model");
const User = require("../models/User.model");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");

router.get("/planner", async (req, res) => {
  const userId = req.session.currentUser._id;
  const thisUser = await User.findById(userId);

  let calendar;

  if (!thisUser.calendar) {
    const userCalendar = await Calendar.create({ user: userId });
    await User.findByIdAndUpdate(userId, {
      calendar: userCalendar._id,
    });
  } else {
    calendar = await Calendar.findOne({ user: userId }).populate(
      "monday tuesday wednesday thursday friday saturday sunday"
    );
  }

  res.render("private/planner", { calendar });
});

router.post("/planner/:id", async (req, res, next) => {
  try {
    const { day } = req.body;
    const { id } = req.params;
    const userId = req.session.currentUser._id;

    if (day === "monday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { monday: id },
        }
      );
    } else if (day === "tuesday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { tuesday: id },
        }
      );
    } else if (day === "wednesday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { wednesday: id },
        }
      );
    } else if (day === "thursday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { thursday: id },
        }
      );
    } else if (day === "friday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { friday: id },
        }
      );
    } else if (day === "saturday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { saturday: id },
        }
      );
    } else if (day === "sunday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $push: { sunday: id },
        }
      );
    }
    res.redirect("/recipes");
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/planner/:id/delete", async (req, res, next) => {
  try {
    const { day } = req.body;
    const { id } = req.params;
    const userId = req.session.currentUser._id;

    if (day === "monday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { monday: id },
        }
      );
    } else if (day === "tuesday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { tuesday: id },
        }
      );
    } else if (day === "wednesday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { wednesday: id },
        }
      );
    } else if (day === "thursday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { thursday: id },
        }
      );
    } else if (day === "friday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { friday: id },
        }
      );
    } else if (day === "saturday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { saturday: id },
        }
      );
    } else if (day === "sunday") {
      await Calendar.findOneAndUpdate(
        { user: userId },
        {
          $pull: { sunday: id },
        }
      );
    }
    res.redirect("/planner");
  } catch (error) {
    console.log(error);
    next(error);
  }
});











module.exports = router;
