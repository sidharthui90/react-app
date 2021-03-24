
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import productReducer from '../reducers/ProductsReducer';
import transactionReducer from '../reducers/TransactionReducer';
import initialState from "./initialState"

const middlewares = [thunk];
export const rootReducer = combineReducers({
  transactions: transactionReducer,
  products:productReducer
});
export const store=createStore(rootReducer, initialState, applyMiddleware(...middlewares));
