import axios from 'axios'

//get all services from database (action) 
const setSer = () => async (dispatch: any) => {
    axios.get('/api/userservice/')
        .then(res => {
            dispatch({
                type: "SET_SER",
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: "SET_SER",
                payload: err.message
            })
        })
}
export default setSer