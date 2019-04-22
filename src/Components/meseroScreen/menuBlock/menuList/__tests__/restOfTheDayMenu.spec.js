import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import RestOfTheDayMenu from '../restOfTheDayMenu';

describe('RestOfTheDayMenu', () => {
  beforeEach(cleanup);
  it('Filtra data con categoría "Resto del día"', () => {
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
    const { getByTestId } = render(<RestOfTheDayMenu data={data} />);
    const container = getByTestId('container-restoftheday');
    expect(container.children).toHaveLength(1);
  });
  it('Muestra nombres del Menú del desayuno', () => {
    const data = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Resto del día',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Resto del día',
      },
    ];
    const { getAllByTestId } = render(<RestOfTheDayMenu data={data} />);
    const nameList = getAllByTestId('name-button-restday').map(button => button.textContent);
    const fakeData = data.map(c => c.nombre);
    expect(nameList).toEqual(fakeData);
  });
  it('Realiza función al hacer click', () => {
    const data = [
      {
        id: 1, nombre: 'item 1', precio: 0, categoría: 'Resto del día',
      },
      {
        id: 3, nombre: 'item 3', precio: 0, categoría: 'Resto del día',
      },
    ];
    const addingItem = (item) => {
      expect(item).toEqual(data[0]);
    };
    const { getByTestId } = render(<RestOfTheDayMenu data={data} addingItem={addingItem} />);
    fireEvent.click(getByTestId('name-button-restday'));
  });
});
