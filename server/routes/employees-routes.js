const express = require("express");

const router = express.Router();

const DUMMY_EMPLOYEES = [
  {
    date: "2013",
    id: "e1",
    fistName: "Helen",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e2",
    fistName: "Matthew",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e3",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e4",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
];

router.get("/", (req, res, next) => {
  console.log("GET Request in users");
  res.json({ message: "It works" });
});

module.exports = router;
