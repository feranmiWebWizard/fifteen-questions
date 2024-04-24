const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://afolayancseyi:zGSuc*B2V2n.-DK@cluster0.l8z7wcb.mongodb.net/questionnaire?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDb