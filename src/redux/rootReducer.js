import { combineReducers } from 'redux';
import { bucketListReducer } from './bucketListReducer';
import { pinReducer } from './pinReducer';
import { productListReducer } from './productListReducer';

export const getProducts = (state) => state.productList;
export const getbucketList = (state) => state.bucketList;
export const getPinProduct = (state) => state.pin;

export const rootReducer = combineReducers({
  productList: productListReducer,
  bucketList: bucketListReducer,
  pin: pinReducer,
});
