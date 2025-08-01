const Customer = require("../models/customer");
const aqp = require("api-query-params");

module.exports = {
  getAllCustomersService: async (limit, page, name, queryString) => {
    try {
      let result = null;

      if (limit && page) {
        let offset = (page - 1) * limit;

        const { filter } = aqp(queryString);
        delete filter.page;
        console.log(filter);

        result = await Customer.find(filter).skip(offset).limit(limit).exec();
      } else {
        result = await Customer.find({});
      }
      return result;
    } catch (error) {
      // console.log(error);
      return null;
    }
  },
  updateCustomersService: async (id, name, email, address) => {
    try {
      return await Customer.updateOne({ _id: id }, { name, email, address });
    } catch (error) {
      return null;
    }
  },
  deleteACustomerService: async (id) => {
    try {
      return await Customer.deleteById(id);
    } catch (error) {
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
  deleteArrayCustomerService: async (arrIds) => {
    try {
      let result = await Customer.delete({ _id: { $in: arrIds } });
      return result;
    } catch (error) {
      return null;
    }
  },
};
