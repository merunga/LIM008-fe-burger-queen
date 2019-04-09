import React from 'react';
import './layout/layout.css';

const OrderSummary = ({ orderItems, deleteItem, updateItem }) => {
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
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <tr key={item}>
              <td>
                <button onClick={() => {
                  const newItem = { ...item };
                  newItem.quantity += 1
                  updateItem(index, newItem);
                }}> + </button>
                <p>{item.quantity}</p>
                <button onClick={() => item.quantity -= 1}> - </button> 
              </td>
              <td>{item.name}</td>
              <td><span>$</span>{item.price*item.quantity}</td>
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
          <td>{orderItems.reduce((acum, element) => acum + (element.quantity*element.price), 0)} </td>
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