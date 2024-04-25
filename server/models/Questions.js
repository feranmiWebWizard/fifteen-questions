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

const ResponsesSchema = new mongoose.Schema({
  surveyId: { type: Number, required: [true, "must provide survey id"] },
  responses: { type: Object, required: [true, "must provide responses"] },
});

// Define the models based on the schemas
const Questions = mongoose.model("Questions", QuestionsSchema);
const Responses = mongoose.model("Responses", ResponsesSchema);

module.exports = { Questions, Responses };
