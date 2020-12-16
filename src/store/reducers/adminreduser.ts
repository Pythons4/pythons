const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADMIN_SIGN_IN':
            localStorage.setItem('token', JSON.stringify(action.token))
            localStorage.setItem('adminid', JSON.stringify(action.adminId._id))
            localStorage.setItem('admininfo', JSON.stringify(action.adminId))

            return {
                token: localStorage.getItem('token'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }

        case 'SIGN_OUT':
            localStorage.removeItem('token')
            localStorage.removeItem('adminid')
            localStorage.removeItem('admininfo')
            return {
                token: localStorage.getItem('token'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }


        default:
            return {
                token: localStorage.getItem('token'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }
    };
};
export default userReducer;