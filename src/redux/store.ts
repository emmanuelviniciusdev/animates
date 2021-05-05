import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth from '../redux/ducks/auth'
import profileSettings from '../redux/ducks/profileSettings'
import match from '../redux/ducks/match'

const rootReducer = combineReducers({ auth, profileSettings, match })
const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store
