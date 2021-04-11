import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth from '../redux/ducks/auth'

const rootReducer = combineReducers({ auth })

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk))
