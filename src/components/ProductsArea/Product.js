import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

const product = ({
  label, price, removed, added, id,
}) => (
  <div className={styles.Card}>
    <div className={styles.Container}>
      <h5 data-testid={`${label}-label`}>{label}</h5>
      <h5>
/S
        {' '}
        {price}
      </h5>
      <button
        data-testid={`${id}-remove-button`}
        type="button"
        onClick={() => removed(id)}
      >
        {' '}
-
      </button>
      <button
        data-testid={`${id}-add-button`}
        type="button"
        onClick={() => added(id, price, label)}
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
