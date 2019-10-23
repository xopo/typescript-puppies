import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './Reducers/mainReducer';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger))
)

export default store;