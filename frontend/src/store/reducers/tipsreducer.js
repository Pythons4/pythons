// import { ADD_TIP } from '../actions/addtips';

const tipsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'ADD_TIP':
            return { tips: payload }

        default:
            return state
    };
};
export default tipsReducer;
