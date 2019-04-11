import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Utils/Utils';
import './Layer.css';

const layer = ({ children }) => (
  <Aux>
    <header>Logo, NavBar, sideDrawer</header>
    <main className="Content">
      {children}
    </main>
  </Aux>
);

export default layer;

layer.propTypes = {
  children: PropTypes.element.isRequired,
};
