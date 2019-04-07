import React from 'react';
import './layout/layout.css';

const ProductList = ({ menu }) => {
 return (
  menu.map(item => (
     <div className="media items"  key={item.id}>
      <img className="align-self-center ml-3 mr-8 icons" src={item.image} alt={item.name}/>
      <p className="mt-2">{item.name}</p>
      <p className="ml-5">Precio: ${ item.price }</p>
      <button>+</button>
     </div>
  ))
 );
};

export default ProductList;