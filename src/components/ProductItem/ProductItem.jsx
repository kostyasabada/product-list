import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getProductImage } from '../../utils';
import { getbucketList, getPinProduct } from '../../redux/rootReducer';
import { addProductToBucket, removeProductfromBucket } from '../../redux/bucketListReducer';
import { pinProduct, unpinProduct } from '../../redux/pinReducer';

export const ProductItem = ({ product }) => {
  const bucketList = useSelector(getbucketList);
  const pinnedProduct = useSelector(getPinProduct);
  const dispatch = useDispatch();

  const addToPin = useCallback((productId) => {
    dispatch(pinProduct(productId));
  }, [dispatch]);

  const addToBucket = useCallback((productID) => {
    if (!bucketList.includes(productID)) {
      dispatch(addProductToBucket(productID));
    }
  }, [bucketList, dispatch]);

  const removeFromBucket = useCallback((productID) => {
    if (bucketList.includes(productID)) {
      dispatch(removeProductfromBucket(productID));
    }
  }, [bucketList, dispatch]);

  return (

    <li
      className="product"
    >
      <div className="product__photo">
        <img
          src={getProductImage(product)}
          alt={product.title}
          className="product__img"
        />
      </div>
      <h3 className="product__title">{product.title}</h3>
      <div className="product__cost">
        <span>Price:</span>
        <span className="product__currency">{`${product.price} USD`}</span>

        {!pinnedProduct.includes(product.id) && (
          <button
            type="button"
            className="product__pin"
            onClick={() => addToPin(product.id)}
          >
            Pin
          </button>
        )}
        {pinnedProduct.includes(product.id) && (
          <button
            type="button"
            className="product__pin"
            onClick={() => dispatch(unpinProduct())}
          >
            Unpin
          </button>
        )}

      </div>

      {!bucketList.includes(product.id) && (
      <button
        type="button"
        className="product__button"
        onClick={() => addToBucket(product.id)}
      >
        Add to bucket
      </button>
      )}

      {bucketList.includes(product.id) && (
      <button
        type="button"
        className="product__button"
        onClick={() => removeFromBucket(product.id)}
      >
        Remove from bucket
      </button>
      )}

      <p>{product.description}</p>

    </li>
  );
};
ProductItem.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};
