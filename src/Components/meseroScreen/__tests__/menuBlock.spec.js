import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import MockFirebase from 'mock-cloud-firestore';
import Waiter from '../menuBlock';

const fixtureData = {
  __collection__: {
    Menú: {
      __doc__: {
        abc1d: {
          cantidad: 0,
          categoría: 'Desayuno',
          id: 'abc1d',
          nombre: 'Café americano',
          precio: 5,
          producto: 'Breakfast',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

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
