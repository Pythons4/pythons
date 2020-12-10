import axios from 'axios'

const setUser = () => async (dispatch: any) => {

    axios.get("/api/users/id").then(res => {
        dispatch({
            type: "SET_USER",
            payload: res.data
        })
    })
        .catch(err => {
            dispatch({
                type: "SET_USER",
                payload: err.message
            })

        })

}
export default setUser