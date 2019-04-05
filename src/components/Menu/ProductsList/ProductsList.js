import React, {useState, useEffect} from 'react';

import Product from './Product/Product';
import db from '../../../services/firestore';


// const description = [
//     {id: 'cafeA', label: 'Café Americano', price: 3},
//     {id: 'hamburS', label: 'Hamburguesa Simple', price: 4},
//     {id: 'aguaP', label: 'Agua 500ml', price: 5}
// ];

const ProductsList = ( props ) => {

    const [diningData, setDiningData] = useState([]);

  useEffect(async () => {
    const result = await db.collection('/dining').get();
    const data = await result.data;
      setDiningData(data);
      
    //   return db.collection('/dining').onSnapshot(query => {
    //     setDiningData(query.docs.map(d => d.data()) );
    //   });


    //   return db.collection('/dining').onSnapshot((query) => {
    //     const data = [];
    //     query.forEach(doc => { data.push({id: doc.id, ...doc.data()}) })
    //   setDiningData(data);
    //   console.log(data);
    //   debugger;

  });




    return (
    <div>
        {diningData.map(din => (
            <Product 
            key={din.label} 
            label={din.label}
            price={din.price}
            added={() => props.addedProduct(din.id)}
            removed={() => props.removedProduct(din.id)} />
        ))}
    </div>
    )
};

export default ProductsList;