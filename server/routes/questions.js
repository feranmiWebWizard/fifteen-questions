const express = require("express");
const { getAllQuestions, createQuestion } = require("../controllers/questions");

const router = express.Router();

router.route("/").get(getAllQuestions).post(createQuestion);

module.exports = router;
