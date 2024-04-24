const express = require("express");
const app = express();
const cors = require('cors');
const port = 3500;
const questions = require("./routes/questions");
const connectDb = require("./db/connect");

require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send({ message: "Hello from Express!" });
});

app.use("/api/v1/questions", questions);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
