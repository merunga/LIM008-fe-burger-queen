import React from 'react';

const OrderSummary = ({ newProduct }) => {
  return (
    newProduct.map(item => (
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    ))
  )
};

export default OrderSummary;

// const Amount = () => {
//   const [count, setCount] = useState(1);

//   return (
//       <div>
//           <button onClick={() => setCount(count + 1)}> + </button>
//           <p>Cantidad: {count}</p>
//           <button onClick={() => setCount(count - 1)}> - </button>
          
//       </div>
//   )
// };

// export default Amount;