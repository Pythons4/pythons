//import all reducers
import { combineReducers } from 'redux';
import productseReducer from './products'
import tipsReducer from './tipsreducer'
import servicesReducer from './servicesReducer'
import cartReducer from './cartreducer'
import ProfileReducer from './profilereducer'
import UserReducer from './userReducer'

const allReducers = combineReducers({
    productseReducer: productseReducer,
    tipsReducer: tipsReducer,
    services: servicesReducer,
    cartReducer: cartReducer,
    ProfileReducer,
    UserReducer: UserReducer
})

export default allReducers



// () => {
//     axios.put('/api/updateproduct', { _id: "5fce14dbab94ea3a26a9feb0", product_quantity: 42 }, configdata)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => console.log(err));
// }