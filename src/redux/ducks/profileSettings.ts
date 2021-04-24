import { Action } from '../../shared/types/duck.types'
import { PetInfo } from '../../shared/types/pet.types'

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
    petPicturesToUpload: Array<any>
    petPictures: Array<any>
    petInfo: PetInfo | null
}

const initialState: StateType = {
    petPicturesToUpload: [],
    petPictures: [],
    petInfo: null,
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

/**
 * Local little helpers
 */
