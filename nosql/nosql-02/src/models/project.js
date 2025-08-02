const mongoose = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfo: customerSchema,
    leaderInfo: userSchema,
    usersInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    tasksInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); //config deleted method (soft delete)

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
