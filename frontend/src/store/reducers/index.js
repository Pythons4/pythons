//import all reducers
import { combineReducers } from 'redux';
import productseReducer from './products'
import tipsReducer from './tipsreducer'
import servicesReducer from './servicesReducer'
import cartReducer from './cartreducer'
import ProfileReducer from './profilereducer'
import UserReducer from './userReducer'
import AdminReduser from './adminreduser'

//all store reducers
const allReducers = combineReducers({
    productseReducer: productseReducer,
    tipsReducer: tipsReducer,
    services: servicesReducer,
    cartReducer: cartReducer,
    ProfileReducer,
    UserReducer,
    AdminReduser
})

export default allReducers