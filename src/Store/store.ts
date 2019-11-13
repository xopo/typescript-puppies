import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import  createSagaMiddleware from 'redux-saga';
import { rootReducer } from './Reducers/mainReducer';
import getPuppiesSaga from './Sagas/sagas';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(getPuppiesSaga);

export default store;