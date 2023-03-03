import axios from 'axios';
import { API_URL } from '../../constant';

export async function registerUser(username, password, fullName) {
  const response = await axios.post(`${API_URL}/auth/register`, { username, password, fullName });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
}