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
}

/**
 * Reducer
 */

export type StateType = {}

const initialState: StateType = {}

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
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
            .post<any, AxiosResponse<AuthResponse>>('login', {
                email,
                password,
            })
            .then(setAuthToken)
    }
}

export function register(data: RegisterData) {
    return () => {
        const { email, password, firstName, lastName } = data

        return appAxios()
            .post<any, AxiosResponse<AuthResponse>>('register', {
                email,
                password,
                firstName,
                lastName,
            })
            .then(setAuthToken)
    }
}

/**
 * Local little helpers
 */

function setAuthToken(res: AxiosResponse<AuthResponse>) {
    localStorage.setItem('token', res.data.token)
    return res
}
