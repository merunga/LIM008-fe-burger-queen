export const addProduct = (arr, currentID, currentPrice, currentLabel) => {
  const product = [];

  if (arr.find((ele => ele.id === currentID))) {
    arr.forEach((ele) => {
      if (ele.id === currentID) {
        ele.cant += 1;
      }
    });
  } else {
    product.push({
      id: currentID,
      label: currentLabel,
      cant: 1,
      price: currentPrice,
    });
  }
  return arr.concat(product);
};

export const removeProduct = (arr, currentID) => {
  if (arr.find(ele => ele.id === currentID && ele.cant === 1)) {
    const i = arr.reduce((acum, ele) => {
      acum.push(ele.id);
      return acum;
    }, []).indexOf(currentID);
    if (i !== -1) {
      arr.splice(i, 1);
    }
  } else if (arr.find(ele => ele.id === currentID)) {
    arr.forEach((ele) => {
      if (ele.id === currentID) {
        ele.cant -= 1;
      }
    });
  }
  return arr;
};

export const estimateAmount = (arr) => {
  const reduceArr = arr.reduce((acum, ele) => {
    acum.push(ele.cant * ele.price);
    return acum;
  }, []).reduce((acum, current) => acum + current, 0);

  return reduceArr;
};
