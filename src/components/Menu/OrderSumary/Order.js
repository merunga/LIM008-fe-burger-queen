import React from 'react';

const order = props => (
  <div>
    <h5>{props.label}</h5>
    <p>
/S
      {props.price}
    </p>
    <p>
Sub-total /S:
      {props.price * props.cant}
    </p>
  </div>
);

export default order;
