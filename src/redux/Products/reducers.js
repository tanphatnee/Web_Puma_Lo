import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  GET_ALL_CLOTHES,
  GET_ALL_SHOES,
  ADD_WISH_LIST,
  GET_NUMBER_WISH_LIST,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR,
  GET_WISH_LIST,
} from  './actions';
 
const initProduct = {
    numberCart:0,
    numberWishList:0,
    Carts:[],
    _products:[],
    _clothes:[],
    WishList:[],
    loading: false,
    error: null,
}
 
export default function todoProduct(state = initProduct, action){
    switch(action.type){
        case FETCH_PRODUCTS_PENDING:
          return {
            ...state,
            loading: true,
          }
        case FETCH_PRODUCTS_ERROR:
          return {
            ...state,
            error: action.error
          }
        case GET_ALL_PRODUCT:
            return{
                ...state,
                _products:action.payload,
                loading: false,
            }
        case GET_ALL_CLOTHES:
            return{
                ...state,
                _clothes:action.payload,
                loading: false,
            }
        case GET_ALL_SHOES:
            return {
                ...state,
                _shoes: action.payload,
                loading: false,
            }
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            // if(state.numberCart===0){
            //     let cart = action.payload
            //     state.Carts.push(cart);
            // }
            // else{
            //     let check = false;
            //     state.Carts.forEach((item,key)=>{
            //         if(item._id===action.payload._id){
            //             state.Carts[key].quantity++;
            //             check=true;
            //         }
            //     });
            //     if(!check){
            //         let _cart = {
            //             _id:action.payload._id,
            //             quantity:1,
            //             name:action.payload.name,
            //             imageUrl:action.payload.imageUrl,
            //             price:action.payload.price
            //         }
            //         state.Carts.push(_cart);
            //     }
            // }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case DELETE_CART:
                let quantity_ = 0
                return{
                    ...state,
                    numberCart:quantity_
                }
        case GET_NUMBER_WISH_LIST:
            return{
                ...state,
            }
        case GET_WISH_LIST:
            const newWishList = action.payload.data.wishLists.map(({productId: {...product}}) => product)
            return {
                ...state,
                WishList: newWishList,
                numberWishList: action.payload.data?.wishLists?.length
            }
        case ADD_WISH_LIST:
            if(state.numberWishList===0){
                let wishList = action.payload.item;
                state.WishList.push(wishList);
            }
            else{
                let check = false;
                state.WishList.forEach((item,key)=>{
                    if(item._id===action.payload.item._id){
                        state.WishList.splice(key,1);
                        check=true;
                    }
                });
                if(!check){
                    let _wishList = action.payload.item
                    state.WishList.push(_wishList);
                }
            }
        return{
            ...state,
            numberWishList: state.WishList.length
        }
        case UPDATE_CART: {
            return {
                ...state,
                numberCart: action.payload
            }
        }
        default:
            return state;
    }
}
