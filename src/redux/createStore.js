import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

export const middlewares = [thunkMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;