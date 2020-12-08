

import { combineReducers } from 'redux';

import servicesReducer from './services/servicesReducer';

export default combineReducers({
    services: servicesReducer
});