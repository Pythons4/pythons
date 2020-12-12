import axios from 'axios'
import config from '../../csrftoken'


export const signup = (userinfo: any) => {
    return function (dispatch: any) {
        var data = {
            user_name: userinfo.user_name,
            user_email: userinfo.user_email, user_password: userinfo.user_password, user_phon: userinfo.user_phon
        }
        axios.post("/api/users/", data, config).then(res => {
            console.log(res.data)
            if (res.data === "already existed user")
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: res.data
                })
            else
                dispatch({
                    type: 'SIGN_IN_UP',
                    token: res.data[1],
                    userId: res.data[0]
                })
        })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: err.message
                })
            })
    }
}


export const signin = (userinfo: any) => {
    return function (dispatch: any) {
        var data = {
            user_email: userinfo.user_email,
            user_password: userinfo.user_password
        }
        axios.post("/api/usercheck", data, config).then(res => {
            console.log(res.data)
            if (res.data === "wrong email" || res.data === "wrong password")
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: res.data
                })
            else
                dispatch({
                    type: 'SIGN_IN_UP',
                    token: res.data[1],
                    userId: res.data[0][0]
                })
        })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "SIGN-IN_ERROR",
                    value: err.message
                })
            })
    }
}