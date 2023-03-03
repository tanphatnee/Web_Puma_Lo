import axios from 'axios';
import { API_URL } from '../constant';


export function filterServices(filterName) {
    return axios.get(`${API_URL}/${filterName}`);
}