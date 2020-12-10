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
                    <img className='product__img' src='https://cdn.simplegreen.com/images/news_media/9-spring-cleaning-tips-made-simple-large.jpg' />
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


