const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADMIN_SIGN_IN':
            localStorage.setItem('adminToken', JSON.stringify(action.adminToken))
            localStorage.setItem('adminid', JSON.stringify(action.adminId._id))
            localStorage.setItem('admininfo', JSON.stringify(action.adminId))
            window.location.href = '/adminprofile'

            return {
                adminToken: localStorage.getItem('adminToken'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }

        case 'SIGN_OUT':
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminid')
            localStorage.removeItem('admininfo')
            window.location.href = '/homepage'

            return {
                adminToken: localStorage.getItem('adminToken'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }

        case 'SIGN-IN_ERROR':
            return {
                error: action.value
            }
        default:
            return {
                adminToken: localStorage.getItem('adminToken'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }
    };
};
export default userReducer;