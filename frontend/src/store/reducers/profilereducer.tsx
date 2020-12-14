
const initialState = {
    UserService: []
};

const ProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_SER":
            return { UserService: action.payload }


        default:
            return state
    }

}


export default ProfileReducer;