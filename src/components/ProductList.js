import React, { Component } from 'react'

const ProductList = ({ menu }) => {
   console.log(menu);
   
    return (
       menu.map(item => <p key={item.id}>{item.name}</p>)
    )
}

export default ProductList;
