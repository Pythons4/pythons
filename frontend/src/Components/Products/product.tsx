import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './product.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch()


export class Product extends Component<{}, any> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            productid: ''

        }
        this.gettoolproduct = this.gettoolproduct.bind(this)
    }

    gettoolproduct() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const allproduct = useSelector<any, any>((state: any) => state.productseReducer)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const dispatch = useDispatch()

    }
    componentDidMount() {
        // axios
        //     .get("/api/products/")
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <div className='container'>
                    <img className='product__img' src='https://cdn.shopify.com/s/files/1/0282/9621/6679/files/home_product_carousel_800x.jpg?v=1592988158' />
                </div>
                <div className='product__list'>

                    <Button onClick={this.gettoolproduct} style={{ marginLeft: "8px" }} color="primary" variant="contained" size="large">Product Tools</Button>

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


