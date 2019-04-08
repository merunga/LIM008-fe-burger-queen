import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsList from '../../components/Menu/ProductsList/ProductsList';

const menuBuilder = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(null);

  const addProductHandler = (id) => {
    setCount(count + 1);
    setId(id);
    console.log('producto agregado', id);
  };

  const removeProductHandler = (id) => {
    setCount(count - 1);
    setId(id);
    console.log('producto eliminado', id);
  };

  return (
    <Aux>
      <p>{count}</p>
      <ProductsList
        addedProduct={addProductHandler}
        removedProduct={removeProductHandler}
      />
      <div>
        <div>Order Summary</div>
        <p>{id}</p>
      </div>
    </Aux>
  );
};

export default menuBuilder;
