import React, { Component } from 'react'
import store from '../../store'
import CancelIcon from '@material-ui/icons/Cancel';
import removefromcart from '../../store/actions/removefromcartaction';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';



interface Props { }
interface State {
    theproduct: any
}
export default class TheCart extends Component<Props, State>{
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            theproduct: (store.getState().cartReducer)
        }
        this.removefromcart = this.removefromcart.bind(this)
    }
    componentDidMount() {
        this.setState({
            theproduct: (store.getState().cartReducer)
        })
    }
    removefromcart(id: string) {
        store.dispatch(removefromcart(id))
        this.componentDidMount()

    }

    render() {
        console.log(this.state.theproduct.whatincart)
        var allproducts = []
        var price = 0
        var count = 0
        var temp = JSON.parse(this.state.theproduct.whatincart)
        for (var i in temp) {
            allproducts.push([i, temp[i]])
            price += (allproducts[count][1].quantity * allproducts[count][1].price)
            count++
        }
        console.log(allproducts, price)

        let { userid } = store.getState().UserReducer
        var pathname = userid ? "/cart/confirm" : "/signin"

        return (
            <div className="d-flex flex-column">
                {allproducts.map((product: any, i: number) =>
                    <div className="d-flex justify-content-start" key={i}>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img style={{ width: '30px' }} src={product[1].img}></img>
                        <p>{product[1].name}</p>
                        <CancelIcon color="secondary" onClick={() => { this.removefromcart(product[0]) }}></CancelIcon>
                    </div>
                )}
                <Link to={{
                    pathname: pathname,
                    state: {
                        price: price,
                        userproducts: this.state.theproduct.whatincart
                    }
                }}>
                    <Button endIcon={<ShoppingCartIcon></ShoppingCartIcon>} className="addtocart" variant="contained" color="primary" >BUY</Button>
                </Link>
                <Button onClick={() => { this.removefromcart('remove') }} className="addtocart" variant="contained" color="primary" >clear</Button>



            </div>
        )
    }
}
