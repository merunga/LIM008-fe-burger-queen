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
});