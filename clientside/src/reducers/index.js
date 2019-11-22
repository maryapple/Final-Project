import { combineReducers } from 'redux'
import {userInfoReducer} from './user-info'
import {cardInfoReducer} from './card-info'

export default combineReducers({
    userInfo: userInfoReducer,
    cardInfo: cardInfoReducer
})