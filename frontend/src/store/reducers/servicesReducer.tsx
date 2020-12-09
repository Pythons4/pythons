import axios from "axios"
const initState = {
    services: []
}

const ServicesReducer = (state = initState, action: any) => {

    switch (action.type) {

        case "SET_SERVICES":
            return {
                // ...state,
                services: action.payload,
                loading: false

            }
        default: return state
    }
}

export default ServicesReducer