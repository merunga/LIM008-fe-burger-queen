import React from 'react';
import './layout/layout.css';

const Product = (props) => {
  return (
    <div className="media items"  >
      <img className="align-self-center ml-3 mr-8 icons" src={props.image} alt={props.name}/>
      <p className="mt-2">{props.name}</p>
      <p className="ml-5">Precio: ${ props.price }</p>
      <button className="btn-add" onClick={props.addOrder}>+</button>
    </div>
  )
  
}

 export default Product;