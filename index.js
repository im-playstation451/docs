const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/nimbus', (req, res) => {
  res.render('nimbus')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})