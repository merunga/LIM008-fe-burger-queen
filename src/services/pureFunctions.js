export const addProduct = (arr, currentID, currentPrice, currentLabel) => {
    let product = [];

        if(arr.find((ele => ele.id === currentID))) {
            arr.forEach(ele => {
                if(ele.id === currentID){
                    ele.cant++
                }})
        } else 
        product.push({
            id: currentID,
            label: currentLabel,
            cant: 1,
            price: currentPrice
        });
    return arr.concat(product);
};

export const removeProduct = (arr, currentID) => {
    if(arr.find((ele => ele.id === currentID))) {
        arr.forEach(ele => {
            if(ele.id === currentID){
                if(ele.cant === 0){
                    return;
                } else {
                    ele.cant--
                }
            }})
    } 
    return arr;
};
