import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import HeaderOrders from '../headerOrders';

describe('HeaderOrders', () => {
  beforeEach(cleanup);
  it('Establece el nuevo valor del input al suceder evento onChange', () => {
    const nameInitial = '';
    const setName = 'Kimberly';
    const { getByTestId } = render(<HeaderOrders nameInitial={nameInitial} setName={setName} />);
    const input = getByTestId('name-customer');
    fireEvent.change(input, { setName: { value: nameInitial } });
    expect(input.value).toEqual(nameInitial);
  });
});
