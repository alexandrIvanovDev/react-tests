import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders learn react link', () => {
    render(<App />);
    const appElement = screen.getByText(/app component/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input placeholder/i);

    expect(appElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
})
