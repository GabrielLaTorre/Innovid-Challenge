let Tasks = require('../database/Tasks')

function getTasks() {
  return Tasks
}

function addTask(data) {
  Tasks.push(data)
  return data
}

function removeTask(id) {
  Tasks = Tasks.filter(element => element.id != id)
  return Tasks
}

module.exports = {
  getTasks,
  addTask,
  removeTask
}