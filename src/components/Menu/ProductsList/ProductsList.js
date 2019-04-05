import React from 'react';

import Product from './Product/Product';
// import dinningData from '../../../services/firestore';

const description = [
    {id: 'cafeA', label: 'Café Americano', price: 3},
    {id: 'hamburS', label: 'Hamburguesa Simple', price: 4},
    {id: 'aguaP', label: 'Agua 500ml', price: 5}
];

const productsList = ( props ) => (
    <div>
        {description.map(desc => (
            <Product 
            key={desc.label} 
            label={desc.label}
            price={desc.price}
            added={() => props.addedProduct(desc.id)}
            removed={() => props.removedProduct(desc.id)} />
        ))}
    </div>
);

export default productsList;