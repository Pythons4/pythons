const prodictsReducer = (state = [], action) => {
    switch (action.type) {
        case 'buy_product':
            return { tips: action.payload }

        case 'GET_ALL':
            localStorage.setItem('product', JSON.stringify(action.product))
            localStorage.setItem('material', JSON.stringify(action.material))

            return {
                product: localStorage.getItem('product'),
                material: localStorage.getItem('material')
            }
        default:
            return {
                product: localStorage.getItem('product'),
                material: localStorage.getItem('material'),
            }
    };
};
export default prodictsReducer;
