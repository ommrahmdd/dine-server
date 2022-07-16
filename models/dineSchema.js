let mongoose = require("mongoose");

let dineSchema = new mongoose.Schema({
  title: {
    type: String,
    reqired: [true, "Title is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  url: String,
  img: String,
  source: String,
});

let Dine = mongoose.model("Dine", dineSchema);

module.exports = Dine;
