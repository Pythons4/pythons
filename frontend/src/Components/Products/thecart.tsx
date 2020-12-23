import React, { Component } from 'react'
import store from '../../store'
import removefromcart from '../../store/actions/removefromcartaction';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../../Auth/signpage.css'
import StripeCheckOutButton from "../strip-button/strip-button"


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
    //method to remove product from the cart
    removefromcart(str: string) {
        //if str was 'remove' all product will be removed from the cart
        store.dispatch(removefromcart(str))
        this.componentDidMount()
        window.location.reload();

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
        var isuser = userid ? true : false

        return (
            <div className='shadowtable' style={{ borderRadius: '5px', width: '60vw', marginLeft: 'auto', marginRight: 'auto' }}>
                <table className="table">
                    <thead className="thead-light" >
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody style={{ paddingTop: '15px' }}>
                        {/* retrive all proudcts that user select in the cart */}
                        {allproducts.map((product: any, i: number) =>
                            <tr >
                                <th scope="row"><img style={{ width: '60px' }} alt='product img' src={product[1].img}></img></th>
                                <td><br></br>{product[1].name}</td>
                                <td><br></br>{product[1].quantity}</td>
                                <td><br></br>{product[1].quantity} x {product[1].price}₪</td>
                                <td><br></br><DeleteIcon style={{ fontSize: 23, color: '#337ab7', cursor: 'pointer' }} onClick={() => { this.removefromcart(product[0]) }}></DeleteIcon></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-around'>Total Price: {price}₪</div>
                    <br></br>
                    <div className='d-flex justify-content-center'>

                        {isuser && <Button endIcon={<ShoppingCartIcon></ShoppingCartIcon>} className="addtocart" variant="contained" style={{ backgroundColor: '#337ab7', marginRight: '20px', width: '120px' }} color="primary" >
                            <StripeCheckOutButton price={price} />
                        </Button>}
                        <Button onClick={() => { this.removefromcart('remove') }} className="addtocart" style={{ backgroundColor: '#337ab7', color: 'white', fontWeight: 600, fontSize: '10px', width: '120px' }} variant="contained" >Clear Cart</Button>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}
