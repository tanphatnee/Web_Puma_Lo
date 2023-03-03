import { getAllProducts } from "../../api/productServices";
import { getClothes, getShoes } from "../../api/categoryServices";
import { addCartServices } from "../../api/cartServices";
import { addWishListServices, getWishListServices } from "../../api/wishListServices";

export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';
export const GET_ALL_CLOTHES = 'GET_ALL_CLOTHES';
export const GET_ALL_SHOES = 'GET_ALL_SHOES';
export const ADD_WISH_LIST = 'ADD_WISH_LIST';
export const GET_WISH_LIST = 'GET_WISH_LIST';
export const GET_NUMBER_WISH_LIST= 'GET_NUMBER_WISH_LIST';
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}

export const actFetchProductsRequest = () => {
  return async (dispatch) => {
      dispatch(fetchProductsPending())
    try {
      const res = await getAllProducts();
      dispatch(GetAllProduct(res.data));
    } catch (err) {
      dispatch(fetchProductsError(err));
    }
  }
}

export const actFetchShoesRequest = () => {
  return async (dispatch) => {
      dispatch(fetchProductsPending())
    try {
      const res = await getShoes();
      dispatch(GetAllShoes(res.data));
    } catch (err) {
      dispatch(fetchProductsError(err));
    }
  }
}

export const actFetchClothesRequest = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending())
    try {
      const res = await getClothes();
      dispatch(GetAllClothes(res.data));
    } catch (err) {
      dispatch(fetchProductsError(err));
    }
  } 
}

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload){
  return{
    type:'GET_ALL_PRODUCT',
    payload
  }
}

//*GET_SHOES
export function GetAllShoes(payload){
  return{
    type:'GET_ALL_SHOES',
    payload
  }
}

//*GET_CLOTHES
export function GetAllClothes(payload){
  return{
    type:'GET_ALL_CLOTHES',
    payload
  }
}

//*GET_NUMBER_WISH_LIST
export function GetNumberWishList(){
  return{
    type:'GET_NUMBER_WISH_LIST',
  }
}
 
/*GET NUMBER CART*/
export function GetNumberCart(){
  return{
    type:'GET_NUMBER_CART'
  }
}
 
export const AddCart = (productId, price, userId) => {
  return async (dispatch) => {
    // dispatch(loading())
    try {
      const res = await addCartServices(productId, price, userId)
      dispatch({
        type: ADD_CART,
        payload: res.data.products
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export function UpdateCart(payload){
  return {
    type:'UPDATE_CART',
    payload
  }
}
export function DeleteCart(payload){
  return{
    type:'DELETE_CART',
    payload
  }
}

//*ADD_WISH_LIST
export const AddWishList = (userId, productId, item) => {
  return async (dispatch) => {
    // dispatch(loading())
    try {
      const res = await addWishListServices(userId, productId)
      dispatch({
        type: ADD_WISH_LIST,
        payload: {
          data: res.data.wishlists,
          item: item,
          message: res.data.message,
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

//* GET_WISH_LIST
export const getWishList = (userId) => {
  return async (dispatch) => {
    try {
      const res = await getWishListServices(userId)
      dispatch({
        type: GET_WISH_LIST,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}




