import { createStore, combineReducers } from 'redux'
import { loginReduser } from './login/loginReducer'

export const rootReducer = combineReducers({ loginReduser })

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)