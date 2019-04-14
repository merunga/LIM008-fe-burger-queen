import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';

const order = ({
  label, price, cant, subTotal,
}) => (
  <div className={styles.Card}>
    <h5>{label}</h5>
    <p>
Precio:
      {' '}
      {price}
    </p>
    <p>
Cantidad:
      {' '}
      {cant}
    </p>
    <p>
Sub-Total:
      {' '}
      {subTotal}
    </p>
  </div>
);

export default order;

order.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cant: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
};
