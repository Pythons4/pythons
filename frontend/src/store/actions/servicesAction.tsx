import axios from 'axios'

//user book services (action)
const setService = () => async (dispatch: any) => {
    try {
        const res = await axios.get(`/api/services/`)
        dispatch({
            type: 'SET_SERVICES',
            payload: res.data
        })
    }
    catch (e) {
        console.log(e.message)
    }
}
export default setService