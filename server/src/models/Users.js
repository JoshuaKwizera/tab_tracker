// this file implments a function which takes sequalize and DataTypes
module.exports = (sequelize, DataTypes) =>
  // use sequalize to define a new module "User" that will be used for storing user valid info
  // that is the email and password plus their attributes
  sequelize.define('Users', {
    email: {
      // a list of properties
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
