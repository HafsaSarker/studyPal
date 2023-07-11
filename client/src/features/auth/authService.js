// file where we make the http requests
import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1/users'

//register user
const register = async (userData) => {
    //make a post req
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

const logInUser = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register,
    logout,
    logInUser
}

export default authService