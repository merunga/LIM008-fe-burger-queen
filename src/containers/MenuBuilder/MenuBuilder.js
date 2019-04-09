import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsArea from '../../components/Menu/ProductsArea/ProductsArea';
import OrderSumary from '../../components/Menu/OrderSumary/OrderSumary';
import { addProduct, removeProduct } from '../../services/pureFunctions';

const menuBuilder = () => {
    
    // const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    // const [purchased, setPurchased] = useState(false);
    // const [cooked, setCooked] = useState(false);
    // const [waiterServed, setServed] = useState(false);

    const addProductHandler = ( selectedID, selectedPrice, selectedLabel ) => {
        setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
        
    };

    const removeProductHandler = ( selectedID ) => {
        setProducts(removeProduct(products, selectedID));
        
    };

        return (
            <Aux>
                <ProductsArea
                    addedProduct={addProductHandler}
                    removedProduct={removeProductHandler}/>
                <OrderSumary products={products}/>
            </Aux>
        );
    }

export default menuBuilder;