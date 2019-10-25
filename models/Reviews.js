const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: String, required: true},
  inputLocation: String,
  CleanlinessReview: String,
  WaitTime: String,
  Picture: { type: String, required: true }
});

const review = mongoose.model("review", reviewSchema);

module.exports = Book;