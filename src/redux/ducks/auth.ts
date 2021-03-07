import { Action } from '../../shared/types/duck.types'
import { Nullable } from '../../shared/types/app.types'
import { User } from '../../shared/types/user.types'

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
export type StateType = {
    token: Nullable<string>
    user: Nullable<User>
}

const initialState: StateType = {
    token: null,
    user: null,
}

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state
    }
}

/**
 * Action creators
 */
export function login(username: string, password: string): Action {
    return {
        type: Types.LOGIN,
        payload: { username, password },
    }
}
