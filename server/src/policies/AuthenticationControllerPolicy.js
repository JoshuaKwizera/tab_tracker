// here we a to implement the expree middle ware that handles auth
// this is also to be included in the route
// include the joi framework
const Joi = require('joi')

// create a module that has the register method
module.exports = {
  register (req, res, next) {
    // the validation will be achieved by setting different constraints
    // this meams that the data req must pass them to proceed from the middle wear; policy
    // the schema constraint that ensures what type the data should be
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    })
    // use the defined schema obj
    // eslint-disable-next-line no-unused-vars
    const { error, value } = schema.validate(req.body)

    // the result
    if (error) {
      // we need to find out which part failed in the switch using .key and then implement the cases accordingly
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics
              <br>
              2. It must be atleast 8 but not greter than 32 charcters in length
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registrationinformation'
          })
      }
    } else {
      next() // this applies that the body has passed the rule and can move to the controller
    }
  }
}
