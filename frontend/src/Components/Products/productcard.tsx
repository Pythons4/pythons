//the file that show information for single product
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//props type
interface Props {
    price: number,
    imge: string,
    name: string,
    location: {
        state: {
            theproduct: {
                product_quantity: number;
                product_description: string;
                product_price: number;
                product_name: string;
                product_img: string
            }
        }
    }
}

//product type
interface Product {
    product_quantity: number;
    product_description: string;
    product_price: number;
    product_name: string;
    product_img: string
}

export default class ProductsCard extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
        }
    }

    render() {
        let theproduct: Product
        theproduct = this.props.location.state.theproduct

        return (
            <div>
                <div className=" ">
                    <img className="" alt="100x100" src={theproduct.product_img}
                        data-holder-rendered="true" />
                    <h2 className="my-5 h2">{theproduct.product_name}</h2>
                    <h4 className="my-5 h4">{theproduct.product_price}</h4>
                    <h5 className="my-5 h5">{theproduct.product_quantity}</h5>
                    <p>{theproduct.product_description}</p>
                </div>
            </div >
        )
    }
}