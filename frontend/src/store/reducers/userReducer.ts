const userReducer = (state: { userid: any, token: any }, action: any) => {
    switch (action.type) {
        case 'SIGN_IN_UP':
            localStorage.setItem('token', action.token)
            localStorage.setItem('userid', action.userId._id)
            localStorage.setItem('userinfo', action.userId)

            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo')
            }

        case 'SIGN_OUT':
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            localStorage.removeItem('userinfo')
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo')
            }

        default:
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo')
            }
    };
};
export default userReducer;