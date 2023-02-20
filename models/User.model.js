const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      favoriteRecipes: [{ type: Schema.Types.ObjectId, ref: "Recipe"}]
    },
    image: {
      type: String,
      default:"https://static.wikia.nocookie.net/disney/images/a/ab/Remy2.jpg/revision/latest/scale-to-width-down/258?cb=20150811202513&path-prefix=pt-br",
    },
    email: {
      type: String,
      required: true,
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
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
