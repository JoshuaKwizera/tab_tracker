<template>
  <!-- this is where html is done -->
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <div class="error" v-html="error" />
    <br>
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
// all the javascript is implemented here
// import the obj that will fetch credetials from the register end point and the forward them to the back end server through the axios obj pointing at it
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // all methods can be implemented below
  methods: {
    // implementing the register end point and this gets the data from the <input v-model=""> tag and then sets the credentials in the Auth
    // new imlemntation of the errors in the client side as well hence need for try and catch
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        // to be implemented here
        this.error = error.response.data.error
        // the message above; it first 3 identify what is returned in the axios(backend) and the last defines the error message
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
