const { getTasksService, createTaskService, updateTaskService, deleteTaskService } = require("../services/task.service");


module.exports = {
  getTasksAPI: async (req, res) => {
    let result = await getTasksService(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  postCreateTaskAPI: async (req, res) => {
    let result = await createTaskService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  putUpdateTaskAPI: async (req, res) => {
    let result = await updateTaskService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  deleteTaskAPI: async (req, res) => {
    let result = await deleteTaskService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
