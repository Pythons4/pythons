import axios from "axios";

//get all product from database
export const GET_ALL = () => {
    return function (dispatch) {
        axios.get("/api/tips/").then(res => {
            var tips = res.data
         
            dispatch({
                type: "GET_ALL",
                tips: tips
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