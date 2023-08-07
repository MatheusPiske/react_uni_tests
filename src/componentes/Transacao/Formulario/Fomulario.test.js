import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Must render a input element', () => {
    it('in the document', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        expect(inputText).toBeInTheDocument();
    });
    
    it('with the number type', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        expect(inputText).toHaveAttribute('type', 'number');
    });
    
    it('that can be field', () => {
        render(<Formulario />);
        const inputText = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(inputText, '50');
        expect(inputText).toHaveValue(50);
    });
})

it('Must call a onSubmit event clicking "realizar transação"', () => {
    const performTransaction = jest.fn();
    
    render(<Formulario realizarTransacao={performTransaction}/>);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(performTransaction).toHaveBeenCalledTimes(1);
})