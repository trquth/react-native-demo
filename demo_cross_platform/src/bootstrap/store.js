import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';
/**
 *  Redux Store configuration
 */
const initialState = {};

const middlewares = [
    thunk,
    logger,
    promiseMiddleware(),
];

//create store
let store = createStore(reducers, initialState,
    composeWithDevTools(
        applyMiddleware(...middlewares),
        
    )
);

export default store;