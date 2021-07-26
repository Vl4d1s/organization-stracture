const express = require("express");
const bodyParser = require("body-parser");

const connetctDB = require("./config/db");
const HttpError = require("./models/http-error");
const usersRoute = require("./routes/api/users-routes");
const authRoute = require("./routes/api/auth-routes");
const tasksRoute = require("./routes/api/tasks-routes");
const reportsRoute = require("./routes/api/reports-routes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

// Handling CORS Errors. Attached headers to every response
app.use((req, res, next) => {
  // Allows to any domain to send request.
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Controls wich headers allowed.
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  // Controls wich HTTP Methods allowed.
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/", (req, res) => {
  res.status(200).send("API Running");
});

// Define Routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/tasks", tasksRoute);
app.use("/api/reports", reportsRoute);

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
