import React from 'react';

const OrderSummary = ({ newOrderItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {newOrderItem.length > 0 ? (
          newOrderItem.map(item => (
            <tr key={item.id}>
              <td>
                <button>+</button>
                <button> - </button>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Sin orden</td>
          </tr>
        )}
      </tbody>
    </table>
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