import counterReducer, {decrement, increment} from './counter-reducer';

describe('counter reducer test', () => {
    test('increment', () => {
        expect(counterReducer({value: 20}, increment())).toEqual({value: 21})
    })
    test('decrement', () => {
        expect(counterReducer({value: 20}, decrement())).toEqual({value: 19})
    })
    test('increment with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
    })
    test('decrement with empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
    })
})