const {
  createProjectService,
  getProjectsService,
  updateProjectService,
  deleteProjectsService,
} = require("../services/project.service");

module.exports = {
  getProjectsAPI: async (req, res) => {
    let result = await getProjectsService(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  postCreateProjectAPI: async (req, res) => {
    let result = await createProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  putUpdateProjectAPI: async (req, res) => {
    let result = await updateProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteProjectAPI: async (req, res) => {
    let result = await deleteProjectsService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
