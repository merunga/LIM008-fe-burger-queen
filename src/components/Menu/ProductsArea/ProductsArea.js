import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Product from './Product';
import db from '../../../services/firestore';
import styles from './ProductsArea.module.css';

const ProductsArea = (props) => {

  const { error, loading, value } = useCollection(
    db.collection('/dining').orderBy('type', 'asc'),
  );

  return (
    <div className={styles.productsArea}>
      {error && (
<strong>
Error:
{' '}
{error}
</strong>
)}
      {loading && <span>Menú: Loading...</span>}
      {value && (
          <span>
            Menú:
            {' '}
            {value.docs.map(doc => (
              <Product
                key={doc.id}
                label={doc.data().label}
                price={doc.data().price}
                removed={() => props.removedProduct(doc.id)}
                added={() => props.addedProduct(doc.id, doc.data().price, doc.data().label)}
              />
            ))}
          </span>
        )}
    </div>
  );
};

export default ProductsArea;
