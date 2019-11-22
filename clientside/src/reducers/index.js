import { combineReducers } from 'redux'
import {userInfoReducer, cardInfoReducer} from './rootreducer'

export default combineReducers({
    userInfo: userInfoReducer,
    cardInfo: cardInfoReducer
})