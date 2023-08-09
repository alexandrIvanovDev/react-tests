import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCounterValue} from '../../store/reducers/selectors/getCounterValue/getCounterValue';
import {decrement, increment} from '../../store/reducers/counter-reducer';

export const Counter = () => {

    const value = useSelector(getCounterValue)

    const dispatch = useDispatch()

    const inc = () => dispatch(increment())
    const decr = () => dispatch(decrement())

    return (
        <div>
            <h1 data-testid='value-title'>{value}</h1>
            <button data-testid='inc-btn' onClick={inc}>inc</button>
            <button data-testid='decr-btn' onClick={decr}>dec</button>
        </div>
    );
};