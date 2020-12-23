
const cartReducer = (state: { whatincart: any, cartvalue: any }, action: any) => {
    
    switch (action.type) {
        case 'BUY_IT':
            return { cartvalue: action.value }

        case 'ADD_TO_CART_ERROR':
            return { cartvalue: action.value }

        case 'ADD_TO_CART':
            //add new product to the whatincart array
            state.whatincart = JSON.parse(localStorage.getItem('thecart') || '{}')
            state.whatincart[action.theid] = action.value
            localStorage.setItem('thecart', JSON.stringify(state.whatincart))
            return { whatincart: localStorage.getItem('thecart') }

        case 'REMOVE_FROM_CART':
            //remove all product
            if (action.theid === 'remove') {
                localStorage.setItem('thecart', '{}')
                return { whatincart: localStorage.getItem('thecart') }
            }
            //remove product by its id from whatincart array
            state.whatincart = JSON.parse(localStorage.getItem('thecart') || '{}')
            delete state.whatincart[action.theid]
            localStorage.setItem('thecart', JSON.stringify(state.whatincart))
            return { whatincart: localStorage.getItem('thecart') }

        default:
            return { whatincart: localStorage.getItem('thecart'), price: 0 }
    };
};
export default cartReducer;