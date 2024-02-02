console.log('hello')

// initializing or importing
const express = require('express')
const bodyParser = require('body-parser') // for processing data easily
const cors = require('cors') // enable server to be hosted on different domains
const morgan = require('morgan')
const { sequelize } = require('./models') // assume a  folder called models that has index.js file that returns an obj that has a sequalize attribute initialized
const config = require('./config/config') // importing the config folder

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// use the post method develop the register end point that receives email and password from client
// get the file from router.js
require('./routes')(app)

// this method below will connect to the database that will be specified
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

// // use the post method develop the register end point that receives email and password from client
// app.post('/register', (req, res) => {
//   res.send({
//     message: `Hello ${req.body.email}! Your user was registered! Have fun!` // we can as well access the pushed credentials
//   })
// })
