const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

const connectDb = require("./db/connect");

app.get("/api", (req, res) => {
  res.send({ message: "Hello from Express!" });
});

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
