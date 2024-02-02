// this file will use different sequalize modules and import and implement the db obj
const fs = require('fs') // this module is for nodejs file system
const path = require('path') // used when dealing with different paths
const Sequelize = require('sequelize') // used for creating a sequelize obj for connecting to the database
const config = require('../config/config') // contains the port to the server and the db: attribute that initialized the args and attributes to be used in the sequelize obj
const db = {}

// declaring the sequelize obj that contains different args
const sequelize = new Sequelize(
  // all these args to be declared implented in the config file within the db attribute array
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// write a short func to read through all the models in the models folder
// and set it up to be user sequalize.. the fs allows us to easily add more model
fs
  .readdirSync(__dirname) // this reads through the current dir and give an array of diff files
  // then filter out the index.js, i.e we dont want it
  .filter((file) =>
    file !== 'index.js'
  )
  // for each found file, declare a seq model that imports and joins the path and _dirname to the file
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

// declare couple db seq objs in order to have acces to the seq obj as well as seq models
db.sequelize = sequelize // here we are putting the configs from the seq obj into the db array
db.Sequelize = Sequelize

module.exports = db
