import axios from "axios";
import config from '../../csrftoken'

//add the user product to the database
const buyWhatInCart = (products: any) => {
    //pars product sice it saved as json
    products = JSON.parse(products)
    var userproduct: any[][] = []
    //add all product in array
    for (var i in products) {
        userproduct.push([products[i].name, products[i].quantity])
    }
    return function (dispatch: any) {
        var data = {
            user_id: '5fcb5770be65ed74a61b177e',
            user_product_location: 'jenin', user_products: JSON.stringify(userproduct)
        }
        axios.post("/api/userproducts/", data, config).then(res => {
            console.log(res.data)
            dispatch({
                type: 'BUY_IT',
                value: res
            })
        })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "BUT_IT_ERROR",
                    value: err.message
                })

            })
    }
}


export default buyWhatInCart