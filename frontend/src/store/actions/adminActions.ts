import axios from 'axios'
import config from '../../csrftoken'

//user sign in action (with token)
export const adminsignin = (userinfo: any) => {
    return function (dispatch: any) {
        var data = {
            admin_email: userinfo.user_email,
            admin_password: userinfo.user_password
        }
        axios.post("/api/adminLogin", data, config).then(res => {
            console.log(res.data)
            if (res.data === "wrong email" || res.data === "wrong password")
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: res.data
                })
            else
                dispatch({
                    type: 'ADMIN_SIGN_IN',
                    adminToken: res.data[1],
                    adminId: res.data[0][0]
                })
        })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: 'signinerror'
                })
            })
    }
}