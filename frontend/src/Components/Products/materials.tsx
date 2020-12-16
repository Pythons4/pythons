//the file that show all material products
import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const ProductMaterials = (props: any) => {
    var materials = []
    materials = props.location.state
    var path = props.location.pathname

    return (
        <div>

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