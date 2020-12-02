export const USER_LOGIN = 'USER_LOGIN'
export const USER_NOT_LOGIN = 'USER_NOT_LOGIN'

interface IsLoginAction {
    type: typeof USER_LOGIN

}

interface NotLoginAction {
    type: typeof USER_NOT_LOGIN

}

export type UserLoginActionTypes = IsLoginAction | NotLoginAction