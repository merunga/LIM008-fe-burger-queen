import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layer.module.css';
import Toolbar from '../Toolbar';

const layer = ({ children }) => (
  <>
    <Toolbar />
    <main className={styles.Content}>
      {children}
    </main>
  </>
);

export default layer;

layer.propTypes = {
  children: PropTypes.element.isRequired,
};
