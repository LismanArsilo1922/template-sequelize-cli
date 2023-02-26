const express = require("express");
const env = require("dotenv");
env.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5001;

app.get(process.env.PATH_API + "/json", (req, res) => {
  return res.status(200).json({
    message: "ok",
  });
});

app.listen(port, () => {
  console.info("Server running on port " + port);
});
