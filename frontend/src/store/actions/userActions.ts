import axios from 'axios'
import config from '../../csrftoken'
import { addnot } from '../../notife'



//user sign up action (with token)
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
                    userId: res.data[0],

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


//user sign in action (with token)
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
                    value: 'Somthing Wrong Happened'
                })
            })
    }
}

//user sign out action
export const signout = () => {
    return { type: 'SIGN_OUT' }



}


//action to change user image
export const updateuserimg = (file1: any, userinfo: any) => {
    return function (dispatch: any) {
        const data = new FormData()
        data.append('file', file1[0])
        data.append('upload_preset', 'appimgs')
        axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
            .then(res => {
                console.log(res.data.secure_url)
                axios.post("/api/userimgupdate", {
                    chang_it: 'img',
                    user_img: res.data.secure_url, user_id: userinfo
                }, config)
                    .then(res => {
                        console.log(res.data)
                        addnot('image updated')

                        dispatch({
                            type: 'UPDATE_IMG',
                            userinfo: res.data,
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        dispatch({
                            type: "UPDATE_ERROR",
                            message: err.message
                        })
                    });
            })
            .catch(err => console.log(err));
    }
}

//action to change user informations
export const updateuserinfo = (userinfo: any, newinfo: any) => {
    return function (dispatch: any) {
        axios.post("/api/userimgupdate", {
            chang_it: 'info',
            user_id: userinfo,
            user_bio: newinfo.user_bio,
            user_phon: newinfo.user_phon,
            user_name: newinfo.user_name
        }, config)
            .then(res => {
                console.log(res.data)
                addnot('Your information updated')

                dispatch({
                    type: 'UPDATE_IMG',
                    userinfo: res.data,
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "UPDATE_ERROR",
                    message: err.message
                })
            });
    }
}


//action to get user services
export const userServices = (id: any, newinfo: any) => {
    return function (dispatch: any) {
        axios.get(`/api/userservice/${id}`, config)
            .then(res => {
                console.log(res.data)
                var serv = []
                for (var i in res.data) {
                    if (res.data[i].user_service_approv)
                        serv.push(res.data[i])
                }
                dispatch({
                    type: 'MY_APPREVED_SERVICES',
                    userinfo: serv,
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "GET_ERROR",
                    message: err.message
                })
            });
    }
}