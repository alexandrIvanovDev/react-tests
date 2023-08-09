import {screen} from '@testing-library/react';
import {Counter} from './Counter';
import userEvent from '@testing-library/user-event';
import {renderWithRedux} from '../../tests/helpers/renderWithRedux';
import {renderTestApp} from '../../tests/helpers/renderTestApp';

describe('counter test', () => {
    test('increment test', () => {
        // Функция render возвращает некоторый контейнер, по типу screen, у него есть те же поля getByTestId и т.д.
        // но поиск происходит не на всей странице, а в компоненте который рендерится
        const {getByTestId} = renderWithRedux(<Counter/>, {counter: {value: 5}})

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const increment = getByTestId('inc-btn')
        expect(screen.getByTestId('value-title')).toHaveTextContent('5')
        userEvent.click(increment)
        expect(screen.getByTestId('value-title')).toHaveTextContent('6')
    })
    test('render test app helper test', () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {counter: {value: 10}}
        })

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const decrement = getByTestId('decr-btn')
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(decrement)
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})