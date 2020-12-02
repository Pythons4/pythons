import { Reducer, Action } from 'redux'
import { UserLoginActionTypes, USER_LOGIN, USER_NOT_LOGIN } from './models/actions'
import { Login } from './models/Login'

const defaultState: Login = {
    login: false
}

export const loginReduser: Reducer<Login, Action> = (state = defaultState, action: UserLoginActionTypes) => {
    const nextState = {
        login: state.login
    }
    switch (action.type) {
        case USER_LOGIN:
            nextState.login = true
            return nextState
        case USER_NOT_LOGIN:
            nextState.login = false
            return nextState
        default:
            return state


    }
}