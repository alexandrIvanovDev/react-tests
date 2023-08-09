import React from 'react';
import {Counter} from '../components/Counter/Counter';

export const MainPage = () => {
    return (
        <div data-testid='main-page'>
            Main page
            <Counter/>
        </div>
    );
};