import axios from 'axios';
import { API_URL } from '../constant';


export function suggestionsServices(searchText) {
    return axios.get(`${API_URL}/suggestions?name=${searchText}`);
}
