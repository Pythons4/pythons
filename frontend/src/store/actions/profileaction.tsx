import axios from 'axios'
import config from '../../csrftoken'


const setUser = () => async (dispatch: any) => {

    axios.post("/api/users/id").then(res => {
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



