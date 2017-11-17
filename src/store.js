import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';

import createHistory from 'history/createHashHistory';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
} = connectRoutes(
    createHistory(),
    {
        ROUTE_A: '/',
        ROUTE_B: '/:id'
    },
    {
        location: 'router'
    }
);

const rootReducer = combineReducers({
    router: routerReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(routerEnhancer, applyMiddleware(routerMiddleware))
);
