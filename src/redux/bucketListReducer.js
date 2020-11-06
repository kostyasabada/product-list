const ADD_PRODUCT = 'bucket/ADD_PRODUCT';
const REMOVE_PRODUCT = 'bucket/REMOVE_PRODUCT';

export const addProductToBucket = (productId) => ({
  type: ADD_PRODUCT,
  payload: productId,
});

export const removeProductfromBucket = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

export const bucketListReducer = (bucketList = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...bucketList,
        action.payload,
      ];
    case REMOVE_PRODUCT:
      return [
        ...bucketList.filter((item) => item !== action.payload),
      ];
    default:
      return bucketList;
  }
};
