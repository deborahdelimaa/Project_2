const { Schema, model } = require("mongoose");
const Calendar = require("./Calendar.model");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      
    },
    image: {
      type: String,
      default:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-f3qxzs_4923c203.jpeg",
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
   bio:{
    type: String,
    required: false,
    unique: false,
    },
    calendar: {
      type: Schema.Types.ObjectId, ref: "Calendar"
    },
    
    favoriteRecipes:
    [{ type: Schema.Types.ObjectId, ref: "Recipe"}]
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
