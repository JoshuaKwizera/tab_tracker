// this file is used to send a connector to the backend/ specifically, this enables use of the code below in the <script> in the component
import axios from 'axios'

// this function creates an axios object that points the server URL and it is to be implemented by the auth that is to be used in the reg component
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
