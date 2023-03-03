import axios from 'axios';
import { API_URL } from '../constant';

export function addWishListServices(userId, productId) {
    return axios.post(`${API_URL}/wishlist`, {userId, productId});
}

export function getWishListServices(userId) {
    return axios.post(`${API_URL}/getwishlist`, {userId});
}