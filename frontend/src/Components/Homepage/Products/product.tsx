import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import './product.css'


export class Product extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <img className='product__img' src='https://cdn.simplegreen.com/images/news_media/9-spring-cleaning-tips-made-simple-large.jpg' />
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


