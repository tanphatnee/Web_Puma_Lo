import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import todoProduct from './Products/reducers';

export default combineReducers({
    user: userReducer,
    _todoProduct:todoProduct
});