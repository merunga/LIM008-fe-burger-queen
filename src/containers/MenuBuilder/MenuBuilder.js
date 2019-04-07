import React, { useState } from 'react';

import Aux from '../../hoc/Utils/Utils';
import ProductsArea from '../../components/Menu/ProductsArea/ProductsArea';
import OrderSumary from '../../components/Menu/OrderSumary/OrderSumary';
import { addProduct, removeProduct } from '../../services/pureFunctions';

const menuBuilder = () => {
    
    const [count, setCount] = useState(0);
    const [id, setId] = useState(null);
    // const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    // const [purchased, setPurchased] = useState(false);
    // const [cooked, setCooked] = useState(false);
    // const [waiterServed, setServed] = useState(false);

    const addProductHandler = ( selectedID, selectedPrice, selectedLabel ) => {
        
        setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
        setCount(count + 1);
        setId(selectedID);
        console.log('producto agregado', selectedID);
    };

    const removeProductHandler = ( selectedID ) => {
        setProducts(removeProduct(products, selectedID));
        setCount(count - 1);
        setId(selectedID);
        console.log('producto eliminado', selectedID);
    };

        return (
            <Aux>
                <ProductsArea
                    addedProduct={addProductHandler}
                    removedProduct={removeProductHandler}/>
                <OrderSumary products={products}/>
                    <p>{count}</p>
                    <p>{id}</p>
            </Aux>
        );
    }

export default menuBuilder;