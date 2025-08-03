const Task = require("../models/task");
const aqp = require("api-query-params");

module.exports = {
  getTasksService: async (queryString) => {
    let result = null;
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;

    result = await Task.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();

    return result;
  },
  createTaskService: async (data) => {
    if (data.type === "EMPTY-TASK") {
      return await Task.create(data);
    }
    return null;
  },
  updateTaskService: async (data) => {
    return await Task.updateOne({ _id: data.id }, { ...data });
  },
  deleteTaskService: async (id) => {
    return await Task.deleteById(id);
  },
};
