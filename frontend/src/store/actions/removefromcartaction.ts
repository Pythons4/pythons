//remove product from cart (action)
const removefromcart = (theid: string) => {
    return {
        type: "REMOVE_FROM_CART",
        theid: theid
    }
}

export default removefromcart