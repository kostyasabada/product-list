import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPinProduct, getProducts } from '../../redux/rootReducer';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductList.scss';

export const ProductList = () => {
  const [filter, setFilter] = useState('');
  const products = useSelector(getProducts);
  const pinnedProduct = useSelector(getPinProduct);

  let filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(filter.toLowerCase())
  || product.description.toLowerCase().includes(filter.toLowerCase()));

  if (pinnedProduct.length === 1) {
    for (let i = 0; i < filteredProducts.length; ++i) {
      if (filteredProducts[i].id === pinnedProduct[0]) {
        const t = filteredProducts[i];
        filteredProducts = filteredProducts.filter((product) => product.id !== pinnedProduct[0]);
        filteredProducts.unshift(t);
      }
    }
  }

  return (
    <section className="product-section">
      <div className="search">
        <label
          htmlFor="sort"
          className="search__label"
        >
          Search
        </label>
        <input
          type="text"
          name="sort"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <ul className="catalog">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            // addToPin={addToPin}
          />
        ))}

      </ul>
    </section>
  );
};
