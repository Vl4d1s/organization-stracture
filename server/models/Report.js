const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  givenBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Report", reportSchema);
