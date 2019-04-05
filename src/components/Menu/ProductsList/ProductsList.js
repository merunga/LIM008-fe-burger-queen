import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import Product from './Product/Product';
import db from '../../../services/firestore';

const ProductsList = (props) => {

  const [diningData, setDiningData] = useState([]);

  const { __, __, value } = useCollection(
    db.collection('dining'),
  );
  setDiningData(value);
  // useEffect(async () => {
  //   const result = await db.collection('/dining').get();
  //   const data = await {id: result.id, ...result.data()};
  //   return setDiningData(data);

  //   //   return db.collection('/dining').onSnapshot(query => {
  //   //     setDiningData(query.docs.map(d => d.data()) );
  //   //   });


  //   //   return db.collection('/dining').onSnapshot((query) => {
  //   //     const data = [];
  //   //     query.forEach(doc => { data.push({id: doc.id, ...doc.data()}) })
  //   //   setDiningData(data);
  //   //   console.log(data);
  //   //   debugger;

  // }, [diningData]);

  return (
      <div>
      {diningData.map(din => (
          <Product
              key={din.label}
              label={din.label}
              price={din.price}
              added={() => props.addedProduct(din.id)}
              removed={() => props.removedProduct(din.id)}
            />
        ))}
    </div>
  );
};

export default ProductsList;
