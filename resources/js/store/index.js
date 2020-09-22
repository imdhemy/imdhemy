import { combineReducers, createStore } from 'redux'
import { counterReducer } from './exampleReducer'

const reducers = {
    counter: counterReducer,
}

const store = createStore(combineReducers(reducers))

export default store
