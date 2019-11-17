import { combineReducers } from 'redux';
import puppiesReducer from './puppiesReducer';

export const rootReducer = combineReducers({
    puppiesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
