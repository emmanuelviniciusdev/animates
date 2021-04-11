import React from 'react'
import { useDispatch } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'

/**
 * https://www.reddit.com/r/typescript/comments/c04mjt/how_to_type_reduxthunks_with_the_new_usedispatch/
 */

type AppThunkDispatch = ThunkDispatch<RootState, any, Action>

function useThunkDispatch(): AppThunkDispatch {
    return useDispatch<AppThunkDispatch>()
}

export default useThunkDispatch
