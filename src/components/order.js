import React, { useState } from 'react';

const Amount = () => {
  const [count, setCount] = useState(1);

  return (
      <div>
          <button onClick={() => setCount(count + 1)}> + </button>
          <p>Cantidad: {count}</p>
          <button onClick={() => setCount(count - 1)}> - </button>
          
      </div>
  )
};

export default Amount;