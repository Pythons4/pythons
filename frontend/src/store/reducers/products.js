import { store } from 'react-notifications-component';

const prodictsReducer = (state = [], action) => {
    switch (action.type) {
        case 'buy_product':
            return { tips: action.payload }

        case 'GET_ALL':
            var currentProduct = JSON.parse(localStorage.getItem('product'))
            console.log(currentProduct)
            if (currentProduct)
                if (currentProduct.length < action.product.length) {
                    // localStorage.setItem('notivecation', 'tool')
                    var notification = { value: 'tool' }
                    addnot("new Tool Product added to the store")
                }
            var currentProduct2 = JSON.parse(localStorage.getItem('material'))
            if (currentProduct2)
                if (currentProduct2.length < action.material.length) {
                    // localStorage.setItem('notivecation', 'tool')
                    notification = { value: 'material' }
                    addnot("new material Product added to the store")
                }
            localStorage.setItem('product', JSON.stringify(action.product))
            localStorage.setItem('material', JSON.stringify(action.material))

            return {
                product: localStorage.getItem('product'),
                material: localStorage.getItem('material'),
                notification: notification
            }
        default:
            return {
                product: localStorage.getItem('product'),
                material: localStorage.getItem('material'),
                notification: { value: null }
            }
    };
};
export default prodictsReducer;

var addnot = (text) => {
    store.addNotification({
        title: "New Product!",
        message: text,
        type: "default",
        insert: "top",
        container: "top-right",
    });
}