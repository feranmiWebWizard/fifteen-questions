const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, "must provide a question"],
    trim: true,
    minlength: [1, "question cannot be less than one character"],
  },
  surveyId: { type: Number, required: [true, "must provide survey id"] },
});

module.exports = mongoose.model("Questions", QuestionsSchema);
