import axios from "axios";

export const GET_ALL = () => {
    return function (dispatch) {
        axios.get("/api/products/").then(res => {
            dispatch({
                type: "GET_ALL",
                payload: res.data
            })
        })
            .catch(err => {
                dispatch({
                    type: "GET_ALL",
                    payload: err.message
                })

            })
    }
}
