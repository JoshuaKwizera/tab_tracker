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

// use the post method develop the register end point that receives email and password from client
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

// // use the post method develop the register end point that receives email and password from client
// app.post('/register', (req, res) => {
//   res.send({
//     message: `Hello ${req.body.email}! Your user was registered! Have fun!` // we can as well access the pushed credentials
//   })
// })

app.listen(process.env.PORT || 8081)
