import axios from 'axios';
import { API_URL } from '../constant';

export function searchServices(searchText) {
    return axios.get(`${API_URL}/search?name=${searchText}`);
}
