import axios from "axios"
const initState = {
    services: "Belal"
}

const ServicesReducer = (state = initState, action: any) => {
    if (action.type == "GET") {

        axios.get('/bookEvent')
            .then((response) => {
                console.log(response)

            })
    }

    return state
}

export default ServicesReducer