const express = require("express");
const bodyParser = require("body-parser");
const connetctDB = require("./config/db");
const HttpError = require("./models/http-error");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
});

app.use((error, req, res, next) => {
  if (res.hederSend) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

connetctDB();
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
