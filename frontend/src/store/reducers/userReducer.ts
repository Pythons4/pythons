const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SIGN_IN_UP':
            //save user info and token in localstorage and redirect the user to his profile page
            localStorage.setItem('token', JSON.stringify(action.token))
            localStorage.setItem('userid', JSON.stringify(action.userId._id))
            localStorage.setItem('userinfo', JSON.stringify(action.userId))
            window.location.href = '/profiletest'
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo')
            }

        case 'SIGN_OUT':
            //remove user info and token from localstorage when logout
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            localStorage.removeItem('userinfo')
            window.location.href = '/homepage'
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo')
            }

        case 'UPDATE_IMG':
            localStorage.setItem('userinfo', JSON.stringify(action.userinfo))
            return {
                userinfo: localStorage.getItem('userinfo'),
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
            }

        case 'MY_APPREVED_SERVICES':
            localStorage.setItem('provedServicses', JSON.stringify(action.userinfo))
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo'),
                userServices: localStorage.getItem('provedServicses')
            }

        case 'SIGN-IN_ERROR':
            return {
                error: action.value
            }

        default:
            return {
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),
                userinfo: localStorage.getItem('userinfo'),
                userServices: localStorage.getItem('provedServicses')
            }
    };
};

export default userReducer;