const { createProjectService } = require("../services/project.service");

module.exports = {
  postCreateProjectAPI: async (req, res) => {
    let result = await createProjectService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
