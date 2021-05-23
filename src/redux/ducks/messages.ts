import { Action } from '../../shared/types/duck.types'
import { Pet } from '../../shared/types/pet.types'
import { appAxios } from '../../shared/helpers'
import { Dispatch } from 'redux'
import { Message } from '../../shared/types/message.types'

/**
 * Action types
 */

export const Types = {
    SET_LOADING_LATEST_MATCHES: 'messages/set_loading_latest_matches',
    SET_LATEST_MATCHES: 'messages/set_lates_matches',
    SET_LOADING_LIST_MESSAGES: 'messages/set_loading_list_messages',
    SET_LIST_MESSAGES: 'messages/set_list_messages',
}

/**
 * Reducer
 */

export type StateType = {
    latestMatches: {
        pets: Pet[]
        loading: boolean
    }
    messages: Message[]
    totalMessages: number
    loadingMessages: boolean
    allMessagesLoaded: boolean
}

const initialState: StateType = {
    latestMatches: {
        pets: [],
        loading: false,
    },
    messages: [],
    totalMessages: 0,
    loadingMessages: false,

    /**
     * It can be true only if 'messages' array is not empty.
     */
    allMessagesLoaded: false,
}

export default function reducer(
    state = initialState,
    action: Action
): StateType {
    switch (action.type) {
        case Types.SET_LOADING_LIST_MESSAGES:
            return {
                ...state,
                loadingMessages: action.payload,
            }

        case Types.SET_LIST_MESSAGES:
            const newState = {
                ...state,
                totalMessages: action.payload.totalMessages,
                messages: [...state.messages, ...action.payload.messages],
            }

            newState.allMessagesLoaded =
                newState.messages.length > 0 &&
                newState.messages.length === newState.totalMessages

            return newState

        case Types.SET_LOADING_LATEST_MATCHES:
            return {
                ...state,
                latestMatches: {
                    ...state.latestMatches,
                    loading: action.payload,
                },
            }

        case Types.SET_LATEST_MATCHES:
            return {
                ...state,
                latestMatches: {
                    ...state.latestMatches,
                    pets: action.payload,
                },
            }

        default:
            return state
    }
}

/**
 * Action creators
 */
export function getListMessages(position = 1, total = 10) {
    return (dispatch: Dispatch) => {
        dispatch(setLoadingListMessages(true))

        return appAxios()
            .get('list_messages', { params: { position, total } })
            .then((res) => {
                const { messages, total } = res.data.data
                dispatch(setListMessages(messages, total))
            })
            .finally(() => dispatch(setLoadingListMessages(false)))
    }
}

export function setListMessages(messages: Message[], totalMessages: number) {
    return {
        type: Types.SET_LIST_MESSAGES,
        payload: {
            messages,
            totalMessages,
        },
    }
}

export function setLoadingListMessages(payload: boolean) {
    return { type: Types.SET_LOADING_LIST_MESSAGES, payload }
}

export function getLatestMatches() {
    return (dispatch: Dispatch) => {
        dispatch(setLoadingLatestMatches(true))

        return appAxios()
            .get('latest_matches')
            .then((res) => dispatch(setLatestMatches(res.data.data.pets)))
            .finally(() => dispatch(setLoadingLatestMatches(false)))
    }
}

export function setLatestMatches(payload: Pet[]) {
    return { type: Types.SET_LATEST_MATCHES, payload }
}

export function setLoadingLatestMatches(payload: boolean) {
    return { type: Types.SET_LOADING_LATEST_MATCHES, payload }
}

/**
 * Local little helpers
 */
