import axios from 'axios'
import { USER_API_URL } from '../api/paths'
// register user
export const register = async (data) => {
  const response = await axios.post(USER_API_URL, data)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}