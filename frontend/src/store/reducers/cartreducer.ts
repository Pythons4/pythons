
const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'BUY_IT':
            return { cartvalue: action.value }

        case 'ADD_TO_CART_ERROR':
            return { cartvalue: action.value }

        case 'ADD_TO_CART':
            if (!state.whatincart) {
                state.whatincart = []
            }
            state.whatincart.push(action.value)
            return { ...state, whatincart: state.whatincart }

        case 'REMOVE_FROM_CART':
            let newState = Object.keys(state.whatincart).reduce((r: any, e: any) => {
                if (!action.value[e]) r[e] = state.whatincart[e];
                return r
            }, {})

            return { ...state, cartData: newState }


        default:
            return { cartvalue: 0 }
    };
};
export default cartReducer;
