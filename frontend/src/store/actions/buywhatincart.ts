import axios from "axios";
import config from '../../csrftoken'

const buyWhatInCart = (value: number, productid: string) => {
    return function (dispatch: any) {
        var data = {
            user_id: '5fcb5770be65ed74a61b177e', user_product_quantity: value,
            user_product_location: 'jenin', product_id: productid
        }
        axios.post("/api/userproducts/", data, config).then(res => {
            dispatch({
                type: 'BUY_IT',
                value: res
            })
        })
            .catch(err => {
                dispatch({
                    type: "BUT_IT_ERROR",
                    value: err.message
                })

            })
    }
}


export default buyWhatInCart