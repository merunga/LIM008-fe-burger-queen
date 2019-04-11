import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import OrderSummary from '../OrderSummary';

describe('OrderSummary', () => {
  it('updateInput', (done) => {
    const updateInput = (event) => {
      expect(event.target.value).toBe('customer nuevo');
      done();
    };
    const { getByTestId } = render(
      <OrderSummary orderItems={[]} clientsName="customer original" updateInput={updateInput} />,
    );
    const input = getByTestId('client-input');
    fireEvent.change(input, { target: { value: 'customer nuevo' } });
  });
  it('deleteItem', (done) => {
    const deleteItem = (id) => {
      expect(id).not.toBe(1);
      done();
    };
    const { getByTestId } = render(
      <OrderSummary orderItems={[{ id: 2, name: 'Café con leche' }]} deleteItem={deleteItem} />
    );
    const deleteItemBtn = getByTestId('0-deleteItem-btn');
    fireEvent.click(deleteItemBtn);
  })
});
