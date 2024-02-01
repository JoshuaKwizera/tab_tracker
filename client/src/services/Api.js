// this file is used to send a connector to the backend
import axios from 'axios'

// this function creates an axios object that points the server URL
export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}