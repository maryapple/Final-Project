import { createStore, applyMiddleware } from 'redux'
import data from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(data, applyMiddleware(thunk))

export default store