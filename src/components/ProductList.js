import React from 'react';
import './layout/layout.css';
import Product from './Product';

const ProductList = ({ menu, addOrderItem }) => {
 return (
  menu.map((item, index) => (
    <Product 
      key={index} 
      image={item.image} 
      name={item.name} 
      price={item.price} 
      addOrder={() => addOrderItem(item.id)}
    />  
  ))
 );
};

export default ProductList;