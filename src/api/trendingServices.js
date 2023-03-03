import axios from 'axios';
import { API_URL } from '../constant';

const config = {
    header: { 'content-type': 'multipart/form-data'}
}

export function getAllTrending() {
    return axios.get(`${API_URL}/trending`);
}

export function getTrending(id) {
    return axios.get(`${API_URL}/trending/${id}`);
}

export function createTrending(newData) {
    return axios.post(`${API_URL}/trending`, newData, config);
}

export function updateTrending(id, newData) {
    return axios.patch(`${API_URL}/trending/${id}`, newData, config);
}

export function deleteTrending(id) {
    return axios.delete(`${API_URL}/trending/${id}`);
}
