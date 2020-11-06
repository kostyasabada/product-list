import React from 'react';
import { useSelector } from 'react-redux';
import './Bucket.scss';

import { getbucketList, getProducts } from '../../redux/rootReducer';
import { ProductItem } from '../ProductItem/ProductItem';

export const Bucket = () => {
  const bucketList = useSelector(getbucketList);
  const products = useSelector(getProducts);

  return (
    <section>
      <div className="product-section">
        <ul className="catalog">
          {products.filter((item) => bucketList.includes(item.id)).map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
