const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  getProjectsService: async (queryString) => {
    let result = null;
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;

    let offset = (page - 1) * limit;

    result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();

    return result;
  },
  createProjectService: async (data) => {
    if (data.type === "EMPTY-PROJECT") {
      return await Project.create(data);
    }
    if (data.type === "ADD-USERS") {
      let findProject = await Project.findById(data.projectId).exec();

      for (let i = 0; i < data.usersArr.length; i++) {
        findProject.usersInfo.push(data.usersArr[i]);
      }

      return await findProject.save();
    }
  },
};
