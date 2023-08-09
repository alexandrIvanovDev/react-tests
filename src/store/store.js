import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counter-reducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

// export const store = configureStore({
//     reducer: rootReducer,
//     // preloadedState: {
//     //     counter: {value: 100}
//     // }
// })