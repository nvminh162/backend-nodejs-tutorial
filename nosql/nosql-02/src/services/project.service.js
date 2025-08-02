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
    if (data.type === "REMOVE-USERS") {
      let findProject = await Project.findById(data.projectId).exec();

      // myProject.usersInfo = myProject.usersInfo.filter(item => !data.usersArr.includes(item));
      // console.log(">>> myProject.usersInfo ", myProject.usersInfo, data.usersArr);

      for (let i = 0; i < data.usersArr.length; i++) {
        findProject.usersInfo.pull(data.usersArr[i]);
      }

      let newResult = await findProject.save();
      return newResult;
    }
  },
  updateProjectService: async (data) => {
    return await Project.updateOne({ _id: data.id }, { ...data });
  },
  deleteProjectsService: async (id) => {
    return await Project.deleteById(id);
  },
};
