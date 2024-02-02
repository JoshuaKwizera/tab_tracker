// we need to get the user data after entering and click and then forward it to the 'User' model
// first declare and require the user model
const { Users } = require('../models') // the models folder has been imported

// this method exports the reg route and then include it in routes.
// it mainly implements the callback func used by the route
module.exports = {
  async register (req, res) {
    // use the users obj defined in the imported Users inside this callback
    try {
      // we basically create the user using the body that was passed in our req
      const user = await Users.create(req.body)
      // if successful send back that user req to the client who req the end point
      res.send(user.toJSON())
    } catch (err) {
      // such as email already in use
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}
