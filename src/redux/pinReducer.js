const PIN_PRODUCT = 'pin/PIN_PRODUCT';
const UNPIN_PRODUCT = 'pin/UNPIN_PRODUCT';

export const pinProduct = (productId) => ({
  type: PIN_PRODUCT,
  payload: productId,
});

export const unpinProduct = () => ({
  type: UNPIN_PRODUCT,
});

export const pinReducer = (pin = [], action) => {
  switch (action.type) {
    case PIN_PRODUCT:
      return [
        action.payload,
      ];
    case UNPIN_PRODUCT:
      return [];
    default:
      return pin;
  }
};
