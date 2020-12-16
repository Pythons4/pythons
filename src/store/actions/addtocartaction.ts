//action to add product to the cart
export const addtocart = (value: any, theid: string) => {
    return {
        type: "ADD_TO_CART",
        value: value,
        theid: theid
    }
}