import { combineReducers } from 'redux'
import {userInfoReducer} from './user-info'
import {cardInfoReducer} from './card-info'
import { accountInfoReducer} from './account-info'
import { currencyRateReducer } from './currencies'
import { updateInputReducer } from './update-input'
import { loginReducer} from './login'
import { cardTypeReducer } from './getcardtypes'
import { addCardReducer } from './add-card'
import { accountTypeReducer } from './getaccounttypes'

export default combineReducers({
    userInfo: userInfoReducer,
    cardInfo: cardInfoReducer,
    accountInfo: accountInfoReducer,
    currencyInfo: currencyRateReducer,
    updateInput: updateInputReducer,
    login: loginReducer,
    cardTypes: cardTypeReducer,
    addCard: addCardReducer,
    accountTypes: accountTypeReducer
})