const Questions = require("../models/Questions");
const surveyId = 1;

const createQuestion = async (req, res) => {
  try {
    const question = await Questions.create(req.body);
    res.status(201).json({ question }); 
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const question = await Questions.find({ surveyId: surveyId });
    res.status(201).json({ question });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
};
