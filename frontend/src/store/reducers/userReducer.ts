const userReducer = (state: { userid: any, token: any }, action: any) => {
    switch (action.type) {
        case 'SIGN_IN_UP':
            localStorage.setItem('token', action.token)
            localStorage.setItem('userid', action.userId)
            return { token: localStorage.getItem('token'), userid: localStorage.getItem('userid') }

        case 'SIGN_OUT':
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            return { token: localStorage.getItem('token'), userid: localStorage.getItem('userid') }

        default:
            return { token: localStorage.getItem('token'), userid: localStorage.getItem('userid') }
    };
};
export default userReducer;