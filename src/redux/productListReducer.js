import { products } from '../api/products';

export const productListReducer = (productList = products, action) => {
  switch (action.type) {
    default:
      return productList;
  }
};
