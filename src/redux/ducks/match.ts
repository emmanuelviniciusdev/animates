import { Action } from '../../shared/types/duck.types'
import { MatchData, Pet } from '../../shared/types/match.types'
import { appAxios } from '../../shared/helpers'
import { Dispatch } from 'redux'

/**
 * Action types
 */

export const Types = {
    SET_LOADING_CURRENT_PET: 'match/set_loading_current_pet',
    SET_CURRENT_PET: 'match/set_current_pet',
}

/**
 * Reducer
 */

export type StateType = {
    currentPet: Pet | null
    loadingCurrentPet: boolean
}

const initialState: StateType = {
    currentPet: null,
    loadingCurrentPet: false,
}

export default function reducer(
    state = initialState,
    action: Action
): StateType {
    switch (action.type) {
        case Types.SET_LOADING_CURRENT_PET:
            return { ...state, loadingCurrentPet: action.payload }

        case Types.SET_CURRENT_PET:
            return { ...state, currentPet: action.payload }

        default:
            return state
    }
}

/**
 * Action creators
 */

export function match(data: MatchData) {
    return (dispatch: Dispatch) => {
        const { petId, action } = data

        dispatch(setLoadingCurrentPet(true))

        return appAxios()
            .post('match', { petId, action })
            .then(() => getNextPet()(dispatch))
    }
}

export function getNextPet() {
    return (dispatch: Dispatch) => {
        dispatch(setLoadingCurrentPet(true))

        return appAxios()
            .post('get_next_pet')
            .then((resp) => {
                dispatch(setCurrentPet(resp.data.data))
            })
            .finally(() => dispatch(setLoadingCurrentPet(false)))
    }
}

function setCurrentPet(pet: Pet) {
    return { type: Types.SET_CURRENT_PET, payload: pet }
}

function setLoadingCurrentPet(state: boolean) {
    return { type: Types.SET_LOADING_CURRENT_PET, payload: state }
}

/**
 * Local little helpers
 */
