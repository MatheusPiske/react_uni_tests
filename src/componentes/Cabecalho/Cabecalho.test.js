import { render, screen } from '@testing-library/react'
import Cabecalho from './index'

it("Must render the username", () => {
    render(<Cabecalho/>)
    const username = screen.getByText('Joana Fonseca Gomes');
    expect(username).toBeInTheDocument
})