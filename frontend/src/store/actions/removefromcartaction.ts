const removefromcart = (data: {}) => {
    return {
        type: "REMOVE_FROM_CART",
        value: data
    }
}

export default removefromcart