const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    preparation: {
      type: String,
    },
    image: {
      type: String,
      default:"https://www.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg"
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
