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

            <div className='product__lists'>
                <div className='product__img'>
                    {/* <img src='https://cdn.simplegreen.com/images/news_media/9-spring-cleaning-tips-made-simple-large.jpg' /> */}



                    <div className='product__buttuns'>

                        <Link to={{
                            //pass the tools product to tools page
                            pathname: "/product/tools",
                            state: this.state.products.product,
                        }}
                            style={{ textDecoration: "none" }}>
                            <Button style={{ borderRadius: '5px', paddingTop: '20px', width: '50%', height: "45px", marginLeft: 'auto', marginRight: 'auto' }} color="primary" variant="contained" >Product Tools</Button>
                        </Link>

                        <Link to={{
                            //pass the material product to material page
                            pathname: "/product/materials",
                            state: this.state.products.material,
                        }}
                            style={{ textDecoration: "none" }}>
                            <Button id='btnn' style={{ borderRadius: '5px', paddingTop: '20px', width: '50%', height: "45px", marginLeft: 'auto', marginRight: 'auto' }} color="primary" variant="contained" size="large">Product Materials</Button>
                        </Link>

                    </div>
                </div>
            </div>





        )
    }
}

export default Product