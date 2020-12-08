import axios from "axios";

const prodictsReducer = (state = [], action) => {
    switch (action.type) {
        case 'buy_product':
            return { tips: action.payload }

        case 'GET_ALL':
            return { product: action.payload }


        default:
            return state
    };
};
export default prodictsReducer;
