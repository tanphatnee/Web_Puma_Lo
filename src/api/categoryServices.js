import axios from 'axios';
import { API_URL } from '../constant';

export function getShoes() {
  return axios.get(`${API_URL}/shoes`);
}

export function getClothes() {
  return axios.get(`${API_URL}/clothes`);
}