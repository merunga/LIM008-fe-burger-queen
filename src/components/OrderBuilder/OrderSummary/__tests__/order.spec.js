import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Order from '../Order';

beforeEach(cleanup);

describe('<Order />', () => {
  it('pinta bien el label', () => {
    const { getByTestId } = render(<Order id="pro1" label="Cafe" />);
    const label = getByTestId('pro1-label');
    expect(label.textContent).toBe('Cafe');
  });
  it('pinta bien la cantidad', () => {
    const { getByTestId } = render(<Order id="pro1" cant={2} />);
    const cant = getByTestId('pro1-cant');
    expect(cant.textContent).toBe('Cantidad: 2');
  });
  it('pinta bien el precio', () => {
    const { getByTestId } = render(<Order id="pro1" price={9} />);
    const price = getByTestId('pro1-price');
    expect(price.textContent).toBe('Precio: 9');
  });
});
