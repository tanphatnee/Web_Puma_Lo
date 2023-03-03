import axios from 'axios';
import { API_URL } from '../constant';

export function addCartServices(productId, price, userId) {
    return axios.post(`${API_URL}/cart`, {productId, price, userId});
}

export function getCartServices(userId) {
    return axios.post(`${API_URL}/getcart`, {userId});
}

export function updateCartServices(newCart) {
    return axios.post(`${API_URL}/cart/updatecart`, newCart)
}

export function deleteCartServices(userId, productId) {
    return axios.post(`${API_URL}/cart/deletecart`, {userId, productId})
}