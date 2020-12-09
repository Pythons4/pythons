import axios from 'axios'

const setService = () => async (dispatch: any) => {

    try {
        const res = await axios.get(`/api/services/`)
        dispatch({
            type: 'SET_SERVICES',
            payload: res.data

        })
        console.log(res.data)

    }
    catch (e) {
        // dispatch({
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }

}
export default setService