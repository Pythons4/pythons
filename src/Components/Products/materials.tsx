//the file that show all material products
import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ProductMaterials = (props: any) => {
    var materials = []
    materials = props.location.state
    var path = props.location.pathname

    return (
        <div>
            <Link to={{ pathname: `/cart` }}>
                <IconButton color="primary" component="span">
                    <ShoppingCartIcon fontSize="large" />
                </IconButton>
            </Link>
            <div className="d-flex flex-wrap justify-content-around catdiv"
                style={{ "marginBottom": '50px', marginTop: "18px" }}  >
                {materials.map((element: { product_name: string, product_img: string, _id: string }, i: number) =>
                    <div key={i} style={{ textAlign: 'center', marginTop: '45px' }}>
                        <Link to={{
                            pathname: `${path}/${element.product_name}`,
                            state: { theproduct: element }
                        }}>
                            <img src={element.product_img} style={{ 'cursor': 'pointer' }}
                                alt="product" className="imgstyle"></img>
                        </Link>
                        <p>{element.product_name} </p>
                    </div>)}
            </div>
        </div>
    )
}

export default ProductMaterials