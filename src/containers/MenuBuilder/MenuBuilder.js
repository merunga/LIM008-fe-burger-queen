import React, { Component } from 'react';

import Aux from '../../hoc/Utils/Utils';

class MenuBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Products List</div>
                <div>Order Summary</div>
            </Aux>
        );
    }
}

export default MenuBuilder;