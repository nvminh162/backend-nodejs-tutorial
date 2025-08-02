const Project = require("../models/project");

module.exports = {
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
