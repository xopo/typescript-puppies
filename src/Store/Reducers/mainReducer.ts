import { combineReducers } from 'redux';
import puppies from './puppiesReducer';

export const rootReducer = combineReducers({ 
    puppies 
});

export type AppState = ReturnType<typeof rootReducer>;
