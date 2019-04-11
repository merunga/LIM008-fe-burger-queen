import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import ProductList from '../ProductList';

describe('ProductList', () => {
  it('deberia poder añadir un item a la orden', () => {
    const addOrderItem = (id) => {
      expect(id).toBe(1);
      done();
    };
    const { getByTestId } = render(
      <ProductList menu={[{ id: 1, name: 'Café americano' }]} addOrderItem={addOrderItem} />,
    );
    const addOrderBtn = getByTestId('0-btn-addOrder');
    fireEvent.click(addOrderBtn);

  });
});
