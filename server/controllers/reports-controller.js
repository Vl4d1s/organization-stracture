const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/User");
const Report = require("../models/Report");

const addReport = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }

  const { title, description, employeeId, managerMail } = req.body;

  let existingManager;
  try {
    existingManager = await User.findOne({ email: managerMail });
  } catch (err) {
    const error = new HttpError(
      "Cannot find the manager, could not add the report.",
      500
    );
    return next(error);
  }

  const createdReport = new Report({
    title,
    description,
    givenBy: employeeId,
  });

  const createdReportId = createdReport._id;

  try {
    await createdReport.save();
    existingManager.reports.push(createdReportId);
    await existingManager.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not add the report.",
      500
    );
    return next(error);
  }

  res.status(201).json({ report: createdReport });
};

exports.addReport = addReport;
