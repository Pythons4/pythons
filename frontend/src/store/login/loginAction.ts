import { USER_LOGIN, USER_NOT_LOGIN } from './models/actions'

export const login = () => ({
    type: USER_LOGIN

})

export const notlogin = () => ({
    type: USER_NOT_LOGIN

})