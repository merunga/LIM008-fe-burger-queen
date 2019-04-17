import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import Button from '../../common/Button';

const product = ({
  label, price, remove, add, id,
}) => (
  <div className={styles.Card}>
    <div className={styles.Container}>
      <h5 data-testid={`${id}-label`}>{label}</h5>
      <h5>
/S
        {' '}
        {price}
      </h5>
      <Button
        dataid={`${id}-remove-button`}
        clicked={() => remove(id)}
        btnType="Danger"
      >
        {' '}
-
      </Button>
      <Button
        dataid={`${id}-add-button`}
        clicked={() => add(id, price, label)}
        btnType="Success"
      >
        {' '}
+
      </Button>
    </div>

  </div>
);

export default product;

product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
