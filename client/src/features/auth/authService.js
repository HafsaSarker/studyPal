// file where we make the http requests
import axios from "axios";
import { USER_API_PATH } from "../../utils/api/paths";

//register user
const register = async (userData) => {
  //make a post req
  const response = await axios.post(USER_API_PATH, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
};

const logInUser = async (userData) => {
  const response = await axios.post(`${USER_API_PATH}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  logInUser,
};

export default authService;
