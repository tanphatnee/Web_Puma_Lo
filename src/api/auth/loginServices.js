import axios from 'axios';
import { API_URL } from '../../constant';

export async function loginUser(username, password) {
  const response = await axios.post(`${API_URL}/auth/login`, { username, password });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
}
