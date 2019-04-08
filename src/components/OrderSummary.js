import React from 'react';
import './layout/layout.css';

const OrderSummary = ({ newOrderItem, deleteItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {newOrderItem.length > 0 ? (
          newOrderItem.map(item => (
            <tr key={item.id}>
              <td>
                <button> + </button>
                <p>1</p>
                <button> - </button>
              </td>
              <td>{item.name}</td>
              <td><span>$</span>{item.price}</td>
              <td>
              <i className="far fa-trash-alt pointer" onClick={() => deleteItem(item.id)}></i>
              </td>
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