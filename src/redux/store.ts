import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth from '../redux/ducks/auth'
import profileSettings from '../redux/ducks/profileSettings'
import match from '../redux/ducks/match'
import messages from '../redux/ducks/messages'

const rootReducer = combineReducers({ auth, profileSettings, match, messages })
const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export default store
