const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

userSchema.plugin(mongoose_delete, { overrideMethods: "all" }); //config deleted method (soft delete)

const User = mongoose.model("User", userSchema);

module.exports = User;
