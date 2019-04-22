import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import BreakfastMenu from '../breakfastMenu';

describe('BreakfastMenu', () => {
  beforeEach(cleanup);
  it('Filtra data con categoría "Desayuno"', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoría: 'Resto del día',
      },
      {
        id: 3, item: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const { getByTestId } = render(<BreakfastMenu data={data} />);
    const container = getByTestId('container-breakfast');
    expect(container.children).toHaveLength(2);
  });
  it('Muestra nombres del Menú del desayuno', () => {
    const data = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const { getAllByTestId } = render(<BreakfastMenu data={data} />);
    const nameList = getAllByTestId('name-rest-breakfast').map(button => button.textContent);
    const fakeData = data.map(c => c.nombre);
    expect(nameList).toEqual(fakeData);
  });
  it('Realiza función al hacer click', () => {
    const data = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Desayuno',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Desayuno',
      },
    ];
    const addingItem = (item) => {
      expect(item).toEqual(data[0]);
    };
    const { getByTestId } = render(<BreakfastMenu data={data} addingItem={addingItem} />);
    fireEvent.click(getByTestId('name-rest-breakfast'));
  });
});
