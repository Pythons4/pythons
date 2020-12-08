import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL } from '../../store/actions/getallproduct'
import store from '../../store'

export default class allproducts extends React.Component {
    var products = []
const incrementCounter = () => {
    store.dispatch(GET_ALL())
    store.subscribe(() => {
        products = store.getState().productseReducer
        console.log(products)
    })
}

return (
    <div>
        <input type='button' value='click me' onClick={incrementCounter} style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large" />
        {products.map(element => {
            <h4>{element.product_name}</h4>
        })}
    </div >
)
}
