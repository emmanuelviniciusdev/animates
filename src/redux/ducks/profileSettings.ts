import { Action } from '../../shared/types/duck.types'
import { Pet } from '../../shared/types/pet.types'

/**
 * Action types
 */

export const Types = {}

/**
 * Reducer
 */

export type StateType = {
    petPicturesToUpload: Array<any>
    petPictures: Array<any>
    petInfo: Pet | null
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
