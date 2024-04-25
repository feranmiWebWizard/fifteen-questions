const express = require("express");
const {
  getAllQuestions,
  createQuestion,
  storeResponses,
} = require("../controllers/questions");

const router = express.Router();

router.route("/").get(getAllQuestions).post(createQuestion);
router.route("/responses").post(storeResponses);

module.exports = router;
