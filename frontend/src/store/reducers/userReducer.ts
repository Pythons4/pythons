import { addnot } from '../../notife'

const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SIGN_IN_UP':
            localStorage.setItem('token', JSON.stringify(action.token))
            localStorage.setItem('userid', JSON.stringify(action.userId._id))
            localStorage.setItem('userinfo', JSON.stringify(action.userId))

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
        case 'UPDATE_IMG':
            localStorage.setItem('userinfo', JSON.stringify(action.userinfo))

            return {
                userinfo: localStorage.getItem('userinfo'),
                token: localStorage.getItem('token'), userid: localStorage.getItem('userid'),

            }
        case 'MY_APPREVED_SERVICES':
            if (JSON.parse(localStorage.getItem('provedServicses') || '{}').length !== action.userinfo.length) {
                addnot('new approved service')
            }
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