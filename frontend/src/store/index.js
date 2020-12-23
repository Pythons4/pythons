import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers'
export const thunkMiddleware = require('redux-thunk').default

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default store;