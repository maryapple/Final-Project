import { combineReducers } from 'redux'
import {userInfoReducer} from './user-info'
import {cardInfoReducer} from './card-info'
import { accountInfoReducer} from './account-info'
import { currencyRateReducer } from './currencies'

export default combineReducers({
    userInfo: userInfoReducer,
    cardInfo: cardInfoReducer,
    accountInfo: accountInfoReducer,
    currencyInfo: currencyRateReducer
})