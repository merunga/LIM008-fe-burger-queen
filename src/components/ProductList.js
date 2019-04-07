import React, { Component } from 'react'

const ProductList = ({ menu }) => {
 
    return (
       menu.map(item => (
         <div key={item.id}>
            <img src={item.image} alt={item.name}/>
            <p>{item.name}</p>
            <p>Precio: ${ item.price }</p>
            <button>+</button>
        
         </div>
       ))
    )
}

export default ProductList;
