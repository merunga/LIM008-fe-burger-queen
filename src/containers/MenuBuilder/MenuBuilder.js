import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsArea from '../../components/Menu/ProductsArea/ProductsArea';
import OrderSumary from '../../components/Menu/OrderSumary/OrderSumary';
import { addProduct, removeProduct, estimateAmount } from '../../services/pureFunctions';

const MenuBuilder = () => {
  const [products, setProducts] = useState([]);
  const [clientName, setNameClient] = useState('');
  // const [purchased, setPurchased] = useState(false);

  const addProductHandler = (selectedID, selectedPrice, selectedLabel) => {
    setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
  };

  const removeProductHandler = (selectedID) => {
    setProducts(removeProduct(products, selectedID));
  };

  return (
    <Aux>
      <ProductsArea
        addedProduct={addProductHandler}
        removedProduct={removeProductHandler}
      />
      <OrderSumary
        products={products}
        totalAmount={estimateAmount(products)}
        clientName={clientName}
        captureNameClient={event => setNameClient(event.target.value)}
      />
    </Aux>
  );
};

export default MenuBuilder;
