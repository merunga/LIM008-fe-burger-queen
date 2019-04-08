import React from 'react';
import './layout/layout.css';
import Product from './Product';

const ProductList = ({ menu, addOrder }) => {
 return (
  menu.map((item, index) => (
    <Product 
      key={index} 
      image={item.image} 
      name={item.name} 
      price={item.price} 
      addOrder={() => addOrder(item.id)}
    />  
  ))
 );
};

export default ProductList;