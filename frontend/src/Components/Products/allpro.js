import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL } from '../../store/actions/getallproduct'
import store from '../../store'

export default class allproducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    }
    incrementCounter() {
        store.dispatch(GET_ALL())
        store.subscribe(() => {
            this.setState({
                products: store.getState().productseReducer.product
            })

            // products = store.getState().productseReducer
            console.log(this.state.products)
        })
    }

    render() {
        let pro
        if (this.state.products.length) {
            console.log(this.state.products)
            pro = <div>
                {this.state.products.map((element, key) =>
                    <div key={key}><h4> {element.product_name}</h4>
                        <img style={{ width: '150px' }} src={element.product_img} alt='product'></img>
                    </div>

                )
                }
            </div>
        }
        else
            pro = <div>No Booked Trips Yet</div>
        return (
            <div>
                <input type='button' value='click me' onClick={this.incrementCounter} style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large" />
                <div>

                    in
               {pro}
                </div>

            </div >
        )
    }
}
