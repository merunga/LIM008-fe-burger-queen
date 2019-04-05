import React, { Component } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsList from '../../components/Menu/ProductsList/ProductsList'


class MenuBuilder extends Component {


    addProductHandler = ( id ) => {
        console.log('producto agregado', id);
    };

    removeProductHandler = ( id ) => {
        console.log('producto eliminado', id);
    };

    render() {
        return (
            <Aux>
                <ProductsList
                    addedProduct={this.addProductHandler}
                    removedProduct={this.removeProductHandler}/>
                <div>Order Summary</div>
            </Aux>
        );
    }
}

export default MenuBuilder;