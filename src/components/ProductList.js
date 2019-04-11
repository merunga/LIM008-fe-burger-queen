import React from 'react';
import './layout/layout.css';
import Product from './Product';

const ProductList = ({ menu, addOrderItem }) => (
  menu.map((item, index) => (
    <Product
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      addOrder={() => addOrderItem(item.id)}
      data-testid={`${index}-btn-addOrder`}
      
    />
  ))
);

export default ProductList;
