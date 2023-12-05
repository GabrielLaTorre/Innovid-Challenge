const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'OK',
    status: 200
  })
})

app.listen(4000, () => {
  console.log("App listen on port 4000")
})