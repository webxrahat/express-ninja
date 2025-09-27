const mongoose = require("mongoose");

const todosSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add title"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todosSchema);
