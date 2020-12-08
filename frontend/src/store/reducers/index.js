//import all reducers
import { combineReducers } from 'redux';
// import islogedReducer from './islogin'
import productseReducer from './products'
import tipsReducer from './tipsreducer'

const allReducers = combineReducers({
    // islogedReducer: islogedReducer,
    productseReducer: productseReducer,
    tipsReducer: tipsReducer

})

export default allReducers