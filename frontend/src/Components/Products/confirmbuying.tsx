import React, { Component } from 'react'

import StripeCheckOutButton from "../strip-button/strip-button"


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


                <StripeCheckOutButton price={this.state.price} />

            </div>
        )
    }
}
