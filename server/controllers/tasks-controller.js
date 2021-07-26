const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/User");
const Task = require("../models/Task");

const addTask = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }

  const { title, description, managerId, employeeMail, dueDate } = req.body;
  let existingEmployee;
  try {
    existingEmployee = await User.findOne({ email: employeeMail });
  } catch (err) {
    const error = new HttpError(
      "Cannot find the employee, could not add the task.",
      500
    );
    return next(error);
  }

  const createdTask = new Task({
    title,
    description,
    givenBy: managerId,
    dueDate,
  });

  const createdTaskId = createdTask._id;

  try {
    await createdTask.save();
    existingEmployee.tasks.push(createdTaskId);
    await existingEmployee.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not add the task.",
      500
    );
    return next(error);
  }

  res.status(201).json({ task: createdTask });
};

const getTasks = async (req, res, next) => {
  const { email } = req.params;

  let existingEmployee;
  try {
    existingEmployee = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Cannot find the employee, could not add the task.",
      500
    );
    return next(error);
  }

  const existingEmployeeTasksIdsArray = existingEmployee.tasks;
  const existingEmployeeTasksArray = [];

  for (let i = 0; i < existingEmployeeTasksIdsArray.length; i++) {
    const taskId = existingEmployeeTasksIdsArray[i];

    let existingTask = await Task.findById(taskId);
    const managerId = existingTask.givenBy;
    // const manager = await User.findById(managerId);
    // const managerFullName = `${manager.firstName} ${manager.lastName}`;
    existingEmployeeTasksArray.push(existingTask);
  }

  res.status(200).json({ tasks: existingEmployeeTasksArray });
};

exports.addTask = addTask;
exports.getTasks = getTasks;
