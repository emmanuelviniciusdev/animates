import { createStore, combineReducers } from 'redux'
import auth from '../redux/ducks/auth'

const rootReducer = combineReducers({ auth })

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
