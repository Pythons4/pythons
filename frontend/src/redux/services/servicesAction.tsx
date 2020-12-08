import { ServicesTypes } from "./servicesTypes";

// let setService = (service: any) => ({
//     type: ServicesTypes.SET_SERVICES,
//     payload: service
// });


// export default setService


import axios from 'axios'

const setService = () => async (dispatch: any) => {

    try {
        const res = await axios.get(`/api/services/`)
        dispatch({
            type: ServicesTypes.SET_SERVICES,
            payload: res.data
        })
    }
    catch (e) {
        // dispatch({
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }

}
export default setService