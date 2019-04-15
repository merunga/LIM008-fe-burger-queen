import React from 'react';

import styles from './Toolbar.module.css';
import NavBar from './NavBar';

const toolbar = () => (
  <header className={styles.Toolbar}>
    <nav>
      <NavBar />
    </nav>
  </header>
);

export default toolbar;
