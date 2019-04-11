import React from 'react';

import Aux from '../../../hoc/Utils/Utils';
import Order from './Order';

const orderSumary = ({
  products, totalAmount, purchaseCancelled, purchaseContinued,
}) => {
  let dinamicProduct = products
    .map(pro => (
      <Order
        key={pro.id}
        label={pro.label}
        price={pro.price}
        cant={pro.cant}
      />
    ));

  if (dinamicProduct.length === 0) {
    dinamicProduct = <p>Por favor, ingresa un nuevo pedido!</p>;
  }

  return (
    <Aux>
      <h3>Resumen de Pedido</h3>
      <div>
        {dinamicProduct}
      </div>
      <div>
        <h5>
Total a Pagar:
          {' '}
          {totalAmount}
        </h5>
      </div>
      <div>
        <button type="button" clicked={purchaseCancelled}>Cancelar</button>
        <button type="button" clicked={purchaseContinued}>Continuar</button>
      </div>
    </Aux>
  );
};

export default orderSumary;
