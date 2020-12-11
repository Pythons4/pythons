
// const initialState = {
//     profile: {
//         id: '',
//         name: '',
//         email: '',
//         img: '',
//         phone: '',
//         bio: '',
//         post: [],
//         fav: []
//     }
// };

const ProfileReducer = (state = null, action: any) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload


        default:
            return state
    }

}


export default ProfileReducer;