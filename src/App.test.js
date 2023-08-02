import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

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

  // Используя query, мы можем убедиться, что какого-то элемента нет
  test('query test', () => {
    render(<App />);
    const element = screen.queryByText(/hello/i);
    expect(element).toBeNull()
  })

  // get должен найти какой-то элемент, если мы его не находим, то возникает ошибка
  test.skip('get test', () => {
    render(<App />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeUndefined()
  })

  test('find test', async () => {
    render(<App />);
    // screen.debug()
    const element = await screen.findByText(/data element/i);

    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle({color: 'red'})
    expect(element).toHaveClass('block')

    // screen.debug()
  })

  test('click event', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');

    expect(btn).toBeInTheDocument()
    expect(screen.queryByTestId('toggle-element')).toBeNull()

    fireEvent.click(btn)
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-element')).toBeNull()
  })

  test('input event', () => {
    render(<App />);
    const h1 = screen.getByTestId('value-element');
    const input = screen.getByTestId('input');

    expect(h1).toHaveTextContent('')

    // fireEvent - искусственное событие
    // fireEvent.input(input, {
    //   target: {value: 'hello'}
    // })

    // userEvent - воспроизводит действия пользователя,
    // обрабатываются события нажатия клавиш, движения мыши и т.д.
    userEvent.type(input, 'hello')

    expect(h1).toHaveTextContent('hello')
  })
})
