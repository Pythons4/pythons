import axios from "axios";

export const ADD_TIP = () => {
    return function () {
        axios
            .get("/api/products/")
            .then(res => {
                console.log(res.data)
                return {
                    type: 'ADD_TIP',
                    payload: res.data
                }
            })
            .catch(err => console.log(err));
    }
};