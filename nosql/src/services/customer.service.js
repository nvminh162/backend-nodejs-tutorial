const Customer = require("../models/customer");

module.exports = {
  createCustomerService: async (customerData) => {
    try {
      return await Customer.create(customerData);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
