import React, { Component } from 'react'
import store from '../../store'
import { Button } from '@material-ui/core';
import buyWhatInCart from '../../store/actions/buywhatincart';

interface Props {
    location: {
        state: {
            price: number,
            userproducts: string
        }
    }

}
interface State {
    price: number,
    products: string
}
export default class CofirmBuy extends Component<Props, State>{
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            price: this.props.location.state.price,
            products: this.props.location.state.userproducts
        }
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="d-flex flex-column">
                <h2>total price {this.state.price} ₪</h2>
                <input type='text' placeholder='your cridet card number'></input>
                <input type='password' placeholder='your cvv'></input>
                <input type='date' placeholder='expire date'></input>
                <input type='text' placeholder='your address'></input>

                <Button onClick={() => {
                    console.log('iiin')
                    store.dispatch(buyWhatInCart(this.state.products))
                }}
                    className="addtocart" variant="contained" color="primary" >confirm</Button>
            </div>
        )
    }
}
