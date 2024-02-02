import Api from '@/services/Api'

// this method will get the credentials from the reg end point implemented in the reg component
// after word it send the post request of the credentials to the server it is accessing through Api axios pointing at the server URL
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
