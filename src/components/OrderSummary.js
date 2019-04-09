import React from 'react';
import './layout/layout.css';

const OrderSummary = ({ orderItem, deleteItem, totalPrice }) => {
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
        {orderItem.length > 0 ? (
          orderItem.map((item, index) => (
            <tr key={index}>
              <td>
                <button onClick={() => item + 1}> + </button>
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
      <tfoot>
        <tr>
          <th colSpan="3">Total:</th>
          <td>$ {totalPrice}</td>
        </tr>
      </tfoot>
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