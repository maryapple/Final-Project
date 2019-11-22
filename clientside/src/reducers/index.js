import { combineReducers } from 'redux'
import {userInfoReducer} from './user-reducer'
import {cardInfoReducer} from './card-reducer'

export default combineReducers({
    userInfo: userInfoReducer,
    cardInfo: cardInfoReducer
})