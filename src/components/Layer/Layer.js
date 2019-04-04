import React from 'react';
import Aux from '../../hoc/Utils/Utils';

const layer = ( props ) => (
    <Aux>
        <header>Logo, NavBar, sideDrawer</header>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layer;