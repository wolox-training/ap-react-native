import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import auth from './auth/reducer.js'
import books from './books/reducer.js'

export const history = createHistory()
const middlewares = [routerMiddleware(history)];
const enhancers = [];
middlewares.push(thunk)
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auth,
    books,
    router: routerReducer
  }),
  composeEnhancers(...enhancers)
 )

export default store
