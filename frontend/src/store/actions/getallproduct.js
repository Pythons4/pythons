import axios from "axios";

//get all product from database
export const GET_ALL = () => {
    return function (dispatch) {
        axios.get("/api/products/").then(res => {
            var material = []
            var product = []
            for (var i in res.data)
                if (res.data[i].product_type === true) {
                    product.push(res.data[i])
                }
                else {
                    material.push(res.data[i])
                }
            //get material and tool products
            dispatch({
                type: "GET_ALL",
                product: product,
                material: material
            })
        })
            .catch(err => {
                dispatch({
                    type: "GET_ALL_ERROR",
                    payload: err.message
                })
            })
    }
}