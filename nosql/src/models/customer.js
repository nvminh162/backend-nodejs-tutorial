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

    timestamp: true, //createAt, updateAt
    // statics: {
    //   findByNvminh162(name) {
    //     return this.find({ name: new RegExp(name, 'i') });
    //   }
    // }
  }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); //config deleted method

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
