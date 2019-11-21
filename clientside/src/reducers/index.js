import { combineReducers } from 'redux'
import rootReducer from './rootreducer'

export default combineReducers({
    userInfo: rootReducer
})