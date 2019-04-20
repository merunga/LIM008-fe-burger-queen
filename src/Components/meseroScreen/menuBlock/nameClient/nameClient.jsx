import React from 'react';
import './nameClient.css';

const NameClient = ({ nameInitial, setName }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="name common">Cliente:</div>
      <input className="common" value={nameInitial.name} onChange={e => setName({ ...nameInitial, name: e.currentTarget.value })} />
    </form>
  );
};
export default NameClient;
