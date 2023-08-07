import { calculaNovoSaldo } from './index'

describe('When it is performed', () => {
    it('a deposit transaction, the balance must increase', () => {
        const transaction = {
            transacao: "Depósito",
            valor: 50
        }

        const newBalance = calculaNovoSaldo(transaction, 100);

        expect(newBalance).toBe(150);
    })

    it('a transfer transaction, the balance must decrease', () => {
        const transaction = {
            transacao: "Transferência",
            valor: 50
        }

        const newBalance = calculaNovoSaldo(transaction, 100);

        expect(newBalance).toBe(50);
    })
})

it('Must return the balance updated with the income', () => {
    const calcBalance = jest.fn(balance => balance + balance * 0.005);
    const balance = 100;
    const newBalance = calcBalance(balance);

    expect(newBalance).toBe(100.5);
    expect(calcBalance).toBeCalled();
    expect(calcBalance).toHaveBeenCalledWith(balance);
})