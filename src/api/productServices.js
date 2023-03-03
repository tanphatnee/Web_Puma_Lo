import axios from 'axios';
import { API_URL } from '../constant';

const config = {
    header: { 'content-type': 'multipart/form-data'}
}

export function getAllProducts() {
    return axios.get(`${API_URL}/product`);
}

export function getProduct(id) {
    return axios.get(`${API_URL}/product/${id}`);
}

export function createProduct(newData) {
    return axios.post(`${API_URL}/product`, newData, config);
}

export function updateProduct(id, newData) {
    return axios.patch(`${API_URL}/product/${id}`, newData, config);
}

export function deleteProduct(id) {
    return axios.delete(`${API_URL}/product/${id}`);
}
