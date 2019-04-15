import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsArea from '../../components/Menu/ProductsArea/ProductsArea';
import OrderSumary from '../../components/Menu/OrderSumary/OrderSumary';
import { addProduct, removeProduct, estimateAmount } from '../../services/pureFunctions';
import db from '../../services/firestore';

const MenuBuilder = () => {
  const [products, setProducts] = useState([]);
  const [clientName, setNameClient] = useState('');

  const addProductHandler = (selectedID, selectedPrice, selectedLabel) => {
    setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
  };

  const removeProductHandler = (selectedID) => {
    setProducts(removeProduct(products, selectedID));
  };

  const purchaseContinueHandler = () => {
    if (products !== [] && clientName !== '') {
      db().collection('orders').add({
        products,
        clientName,
        date: db.FieldValue.serverTimestamp(),
      });
      setProducts([]);
      setNameClient('');
    } else {
      alert('Por favor, llena todos los campos para enviar la orden a cocina.');
    }
  };

  const purchaseCancelHandler = () => {
    setProducts([]);
    setNameClient('');
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
        purchaseContinued={purchaseContinueHandler}
        purchaseCancelled={purchaseCancelHandler}
      />
    </Aux>
  );
};

export default MenuBuilder;
