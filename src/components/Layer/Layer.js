import React from 'react';
import Aux from '../../hoc/Utils/Utils';
import './Layer.css';

const layer = ( props ) => (
    <Aux>
        <header>Logo, NavBar, sideDrawer</header>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
);

export default layer;
