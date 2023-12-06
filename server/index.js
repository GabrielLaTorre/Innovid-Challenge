const express = require('express')
const app = express()
const cors = require('cors')
const Task = require('./routes/Task')

app.use(cors())
app.use(express.json())

app.use('/tasks', Task)

app.listen(4000, () => {
  console.log("App listen on port 4000")
})