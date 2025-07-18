const express = require('express')

const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nvminh162', (req, res) => {
  res.send('@nvminh162!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
