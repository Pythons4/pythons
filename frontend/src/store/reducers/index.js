//import all reducers
import { combineReducers } from 'redux';
// import islogedReducer from './islogin'
import productseReducer from './products'
import tipsReducer from './tipsreducer'
import servicesReducer from './servicesReducer'

const allReducers = combineReducers({
    // islogedReducer: islogedReducer,
    productseReducer: productseReducer,
    tipsReducer: tipsReducer,
    services: servicesReducer

})

export default allReducers