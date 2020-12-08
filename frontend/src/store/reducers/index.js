//import all reducers
import { combineReducers } from 'redux';
import productseReducer from './products'
import tipsReducer from './tipsreducer'
import servicesReducer from './servicesReducer'
import cartReducer from './cartreducer'

const allReducers = combineReducers({
    productseReducer: productseReducer,
    tipsReducer: tipsReducer,
    services: servicesReducer,
    cartReducer: cartReducer
})

export default allReducers