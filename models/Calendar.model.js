const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
    {
      monday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      tuesday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      wednesday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      thursday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      friday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      saturday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
      sunday: {
        type: [{ type: Schema.Types.ObjectId, ref: "Recipe"}],
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Calendar = model("Calendar", calendarSchema);
  
  module.exports = Calendar;
  