const TaskController = require('../controller/TaskController')

const express = require('express')
const router = express.Router()

router.get('/', TaskController.GetTasks)

router.post('/', TaskController.AddTask)

router.delete('/:id', TaskController.RemoveTask)

module.exports = router