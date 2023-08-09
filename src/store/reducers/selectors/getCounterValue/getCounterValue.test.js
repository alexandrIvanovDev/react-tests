import {getCounterValue} from './getCounterValue';

describe('getCounterValue', () => {
    test('work with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })
    test('work with value 100', () => {
        const state = {counter: {value: 100}}
        expect(getCounterValue(state)).toBe(100)
    })
})