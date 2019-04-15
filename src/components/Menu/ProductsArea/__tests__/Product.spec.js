import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Product from '../Product';

beforeEach(cleanup);

describe('<Product />', () => {
    it('pinta bien el label', () => {
        const { getByTestId } = render(<Product label='producto1' />);
        const label = getByTestId('producto1-label')
        expect(label.textContent).toBe('producto1');
    });
    it('ejecuta funcion de add', () => {
        const added = jest.fn();
        const { getByTestId } = render(<Product id='123' added={added} />);
        const button = getByTestId('123-add-button')
        expect(added.mock.calls).toHaveLength(0);
        fireEvent.click(button);
        expect(added.mock.calls).toHaveLength(1);
    });
    it('ejecuta función de remove', () => {
        const removed = jest.fn();
        const { getByTestId } = render(<Product id='123' removed={removed} />);
        const button = getByTestId('123-remove-button')
        expect(removed.mock.calls).toHaveLength(0);
        fireEvent.click(button);
        expect(removed.mock.calls).toHaveLength(1);
    });
})