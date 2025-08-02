const mongoose = require("mongoose");
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); //config deleted method (soft delete)

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
