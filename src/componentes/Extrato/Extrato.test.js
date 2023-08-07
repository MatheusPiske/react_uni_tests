import { render, screen } from '@testing-library/react';
import Extrato from './index';

it('Must render a transactions list', () => {
    const transactions = [
        {
            transacao: 'Depósito',
            valor: 100,
        }
    ]
    
    render(<Extrato transacoes={transactions}/>);
    const transactionsList = screen.getByRole('listitem');
    expect(transactionsList).toBeInTheDocument();
});