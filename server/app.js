const express = require("express");
const bodyParser = require("body-parser");

const connetctDB = require("./config/db");
const HttpError = require("./models/http-error");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("API Running");
});

// Define Routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

// Will execute if any middleware infront of it yields an error.
app.use((error, req, res, next) => {
  if (res.headerSend) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// Connect Database
connetctDB();
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
