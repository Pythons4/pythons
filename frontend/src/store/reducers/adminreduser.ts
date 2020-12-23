const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADMIN_SIGN_IN':
            //save admin info and token in localstorage
            localStorage.setItem('adminToken', JSON.stringify(action.adminToken))
            localStorage.setItem('adminid', JSON.stringify(action.adminId._id))
            localStorage.setItem('admininfo', JSON.stringify(action.adminId))
            //redirect the admin to his profile page
            window.location.href = '/adminprofile'
            return {
                adminToken: localStorage.getItem('adminToken'), adminid: localStorage.getItem('adminid'),
                admininfo: localStorage.getItem('admininfo')
            }

        case 'SIGN_OUT':
            //remove admin info and token from localstorage when log out
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminid')
            localStorage.removeItem('admininfo')
            //redirect the admin to the homepage
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