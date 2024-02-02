// all the routes in the server will be implemented here
// import the app.js containing server code

// using the created auth controller
const AuthenticationController = require('./controllers/AuthenticationController')

// including the auth policy
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// use the authCont that has implemnts the code to the backend server
module.exports = (app) => {
  app.post('/register',
    // call the controller policy as a middleware func before hitting the controller
    // in this middle wear is validation of info b4 the controller sends it to the model
    AuthenticationControllerPolicy.register,

    // now we can hit the controller
    AuthenticationController.register)
}
