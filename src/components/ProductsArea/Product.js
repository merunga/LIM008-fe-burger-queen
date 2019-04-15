import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

const product = ({
  label, price, removed, added,
}) => (
  <div className={styles.Card}>
    <div className={styles.Container}>
      <h5>{label}</h5>
      <h5>
/S
        {' '}
        {price}
      </h5>
      <button
        type="button"
        onClick={removed}
      >
        {' '}
-
      </button>
      <button
        type="button"
        onClick={added}
      >
        {' '}
+
      </button>
    </div>

  </div>
);

export default product;

product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
};
