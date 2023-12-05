const TaskService = require('../services/TaskService')

function GetTasks(req, res, next) {
  const result = TaskService.getTasks()
  res.send(result)
}

function AddTask(req, res, next){
  const data = req.body
  const result = TaskService.addTask(data)
  res.send(result)
}

function RemoveTask(req, res, next) {
  const id = req.params.id
  const result = TaskService.removeTask(id)
  res.send(result)
}

module.exports = {
  GetTasks,
  AddTask,
  RemoveTask
}