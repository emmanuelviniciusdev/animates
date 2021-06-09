import { Action } from '../../shared/types/duck.types'
import {
    LoginData,
    AuthResponse,
    RegisterData,
} from '../../shared/types/auth.types'
import { appAxios } from '../../shared/helpers'
import { AxiosResponse } from 'axios'

/**
 * Action types
 */

export const Types = {
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    SET_USERID: 'auth/set_userid',
}

/**
 * Reducer
 */

export type StateType = {
    userid?: number
}

const initialState: StateType = {}

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.SET_USERID:
            return { ...state, userid: action.payload }

        default:
            return state
    }
}

/**
 * Action creators
 */

export function login(data: LoginData) {
    return () => {
        const { email, password } = data

        return appAxios()
            .post<any, AxiosResponse<AuthResponse>>('autenticacao', {
                email,
                senha: password,
            })
            .then(setAuthToken)
    }
}

export function register(data: RegisterData) {
    return () => {
        const { email, password, firstName, lastName } = data

        return appAxios()
            .post<any, AxiosResponse<AuthResponse>>('usuario', {
                email,
                senha: password,
                nome: firstName,
                sobrenome: lastName,
            })
            .then(setAuthToken)
    }
}

export function setUserID(userid: number): Action {
    return { type: Types.SET_USERID, payload: userid }
}

/**
 * Local little helpers
 */

function setAuthToken(res: AxiosResponse<AuthResponse>) {
    localStorage.setItem('token', res.data.token)
    return res
}
