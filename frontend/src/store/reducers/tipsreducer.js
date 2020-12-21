// import { GET_ALL } from '../actions/getalltips';
const tipsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return {
                tips: action.tips
            }
        default:
            return state
    };
};
export default tipsReducer;
