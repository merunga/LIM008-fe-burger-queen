import React from 'react';

import Aux from '../../../hoc/Utils/Utils';
import Order from './Order';

const orderSumary = ( props ) => {
    let dinamicProduct = props.products
    .map( pro => {               
            return (
            <Order 
            label={pro.label} price={pro.price}
            cant={pro.cant} /> )
        } )
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
                <h6>Precio Total: {props.totalPrice}</h6>
            </div>
            <div>
                <button clicked={props.purchaseCancelled}>Cancelar</button>
                <button clicked={props.purchaseContinued}>Continuar</button>
            </div>
        </Aux>
    )
}

export default orderSumary;