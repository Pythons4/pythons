import axios from "axios";
import config from '../../csrftoken'
import removefromcart from "./removefromcartaction"
import store from "../../store"

//add the user product to the database
const buyWhatInCart = (products: any, userid: any, user_location: any) => {

    products = JSON.parse(products)
    var ProductData: any[] = [];
    var userproduct: any[][] = []
    //add all product in array
    for (var i in products) {
        userproduct.push([products[i].name, products[i].quantity])
        ProductData.push({ _id: i, product_quantity: products[i].quantity })
    }
    return function (dispatch: any) {
        var data = {
            user_id: userid,
            user_product_location: user_location, user_products: JSON.stringify(userproduct)
        }
        axios.post("/api/userproducts/", data, config).then(res => {
            console.log(res.data)

            dispatch({
                type: 'BUY_IT',
                value: res
            })
            //clear all product in the cart
            store.dispatch(removefromcart("remove"));
            for (var i = 0; i < ProductData.length; i++) {
                axios.put('/api/updateproduct', ProductData[i], config)
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
            .catch(err => {
                console.log(err.message)
                dispatch({
                    type: "BUT_IT_ERROR",
                    value: err.message
                })
            })
    }
}

export default buyWhatInCart