console.log('hello')

// initializing or importing
const express = require('express')
const bodyParser = require('body-parser') // for processing data easily
const cors = require('cors') // enable server to be hosted on different domains
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// get request to a status end point
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081)
