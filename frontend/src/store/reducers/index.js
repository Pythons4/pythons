//import all reducers
import { combineReducers } from 'redux';
import productseReducer from './products'
import tipsReducer from './tipsreducer'
import servicesReducer from './servicesReducer'

const allReducers = combineReducers({
    productseReducer: productseReducer,
    tipsReducer: tipsReducer,
    services: servicesReducer

})

export default allReducers