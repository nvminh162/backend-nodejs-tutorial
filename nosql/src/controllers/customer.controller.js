const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  updateCustomersService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customer.service");
const { uploadSingleFile } = require("../services/file.service");

// {key: value}
module.exports = {
  getCustomersAPI: async (req, res) => {
    let { limit, page, name } = req.query;
    let result = null;

    if(limit && page) {
      result = await getAllCustomersService(limit, page, name);
    } else {
      // result = await getAllCustomersService();
    }

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  putUpdateCustomersAPI: async (req, res) => {
    let { id, name, email, address } = req.body;
    const result = await updateCustomersService(id, name, email, address);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  postCreateCustomerAPI: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageURL = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      // do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageURL,
    };

    let customer = await createCustomerService(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  //bulk customer/ batch customer
  postCreateArrayCustomersAPI: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);

    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: null,
      });
    }
  },
  deleteACustomerAPI: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteArrayCustomerAPI: async (req, res) => {
    let ids = req.body.customersId;
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
