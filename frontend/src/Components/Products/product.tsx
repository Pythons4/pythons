//main products page
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './product.css'
import store from '../../store';
import { GET_ALL } from '../../store/actions/getallproduct';

// import axios from "axios";
// import configdata from '../../csrftoken'
// import { signin } from '../../store/actions/userActions';

export class Product extends Component<{}, any> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            products: store.getState().productseReducer
        }
    }

    //get all product from database (via GET_ALL action)
    componentDidMount() {
        store.dispatch(GET_ALL())
        store.subscribe(() => {
            this.setState({
                products: store.getState().productseReducer
            })
        })
    };
    render() {
        console.log(this.state.products)
        return (
            <div>
                <div className='product__img'>

                    <div className='product__list'>

                        <Link to={{
                            //pass the tools product to tools page
                            pathname: "/product/tools",
                            state: this.state.products.product,
                        }}
                            style={{ textDecoration: "none" }}>
                            <Button style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Product Tools</Button>
                        </Link>

                        <Link to={{
                            //pass the material product to material page
                            pathname: "/product/materials",
                            state: this.state.products.material,
                        }}
                            style={{ textDecoration: "none" }}>
                            <Button style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Product Materials</Button>
                        </Link>

                    </div>

                </div>
            </div>

        )
    }
}

export default Product