const Customer = require("../models/customer");

module.exports = {
  getAllCustomersService: async () => {
    try {
      return await Customer.find({});
    } catch (error) {
      // console.log(error);
      return null;
    }
  },
  createCustomerService: async (customerData) => {
    try {
      return await Customer.create(customerData);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  createArrayCustomerService: async (arr) => {
    try {
      return await Customer.insertMany(arr);
    } catch (error) {
      // console.log(error);
      return null;
    }
  },
};
