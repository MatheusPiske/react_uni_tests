import { render, screen } from '@testing-library/react'
import Menu from './index';

// findBy() e findAllBy() => assíncronos

it('Must render a link to the main page', () => {
    render(<Menu/>);
    const linkMainPage = screen.getByText('Inicial');
    expect(linkMainPage).toBeInTheDocument();
});

it('Must render a list of links', () => {
    render(<Menu/>);
    const linksMainPage = screen.getAllByRole('link');
    expect(linksMainPage).toHaveLength(4);
});

it('Should\'t render the extract link', () => {
    render(<Menu/>);
    const extractLink = screen.queryByText('Extrato');
    expect(extractLink).not.toBeInTheDocument();
});

it('Must render a list of links with the "link" class', () => {
    render(<Menu/>)
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
       expect(link).toHaveClass('link'); 
    });
    expect(links).toMatchSnapshot();
});