import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import {MemoryRouter} from 'react-router-dom';

describe('Router  test', () => {
    test('link test', () => {
        render(<MemoryRouter><App/></MemoryRouter>);

        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink )
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })

    test('not found page test', () => {
        render(<MemoryRouter initialEntries={['/some-route']}><App/></MemoryRouter>);

        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    })
})