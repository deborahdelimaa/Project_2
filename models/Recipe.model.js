const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
    { name: {
        type: String,
        required: false,
      },
      duration: {
        type: Number,
        required: true,
      },
      ingredients: {
        type: [String],
        required: true,
      },
      preparation:{
      type: String,
      },
    },{
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
      }
    );

    const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
