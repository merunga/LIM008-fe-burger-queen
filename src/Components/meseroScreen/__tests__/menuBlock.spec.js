import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Waiter from '../menuBlock';

describe('Waiter', () => {
  beforeEach(cleanup);
  it('Realiza función al hacer click', () => {
    const menu = false;
    const setMenu = !menu;
    const { getByTestId } = render(<Waiter menu={menu} setMenu={setMenu} />);
    fireEvent.click(getByTestId('render-breakfast'));
    // expect().toEqual(nameInitial);
  });
});
