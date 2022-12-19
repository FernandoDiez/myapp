import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { loadState } from './loadState'
import { saveState } from './saveState'

import { loginReducer } from '../redux/reducers/loginReducer'

const reducers = combineReducers({
  loginReducer: loginReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const rootReducer = (state, action) => { return reducers(state, action) }
const initialState = loadState()
export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => { saveState(store.getState()) })