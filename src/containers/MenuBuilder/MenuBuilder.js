import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsArea from '../../components/Menu/ProductsArea/ProductsArea';
import OrderSumary from '../../components/Menu/OrderSumary/OrderSumary';
import { addProduct, removeProduct, estimateAmount } from '../../services/pureFunctions';

const menuBuilder = () => {
  const [amountTotal, setAmountTotal] = useState(0);
  const [products, setProducts] = useState([]);
  // const [purchased, setPurchased] = useState(false);
  // const [cooked, setCooked] = useState(false);
  // const [waiterServed, setServed] = useState(false);

  const addProductHandler = (selectedID, selectedPrice, selectedLabel) => {
    setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
    setAmountTotal(estimateAmount(products));
  };

  const removeProductHandler = (selectedID) => {
    setProducts(removeProduct(products, selectedID));
    setAmountTotal(estimateAmount(products));
  };

  return (
    <Aux>
      <ProductsArea
        addedProduct={addProductHandler}
        removedProduct={removeProductHandler}
      />
      <OrderSumary products={products} totalAmount={amountTotal} />
    </Aux>
  );
};

export default menuBuilder;
