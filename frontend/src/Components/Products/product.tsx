import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import './product.css'


export class Product extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <img className='product__img' src='https://cdn.shopify.com/s/files/1/0282/9621/6679/files/home_product_carousel_800x.jpg?v=1592988158' />
                </div>
                <div className='product__list'>

                    <Link to="/tools" style={{ textDecoration: "none" }}>
                        <Button style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Product Tools</Button>
                    </Link>

                    <Link to="/materials" style={{ textDecoration: "none" }}>
                        <Button style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Product Materials</Button>
                    </Link>






                </div>
            </div>
        )
    }
}

export default Product


