const ADD_DATA_ACCOUNT_REQUEST = 'ADD_DATA_ACCOUNT_REQUEST'
const ADD_DATA_ACCOUNT_SUCCESS = 'ADD_DATA_ACCOUNT_SUCCESS'
const ADD_DATA_ACCOUNT_FAIL = 'ADD_DATA_ACCOUNT_FAIL'

const initialStateAccount = {
    account: {},
    isLoading: true
}

export const addAccountReducer = (state = initialStateAccount, action) => {
    switch (action.type) {
        case ADD_DATA_ACCOUNT_REQUEST:
            return { ...state, isLoading: true }

        case ADD_DATA_ACCOUNT_SUCCESS:
            return { ...state, isLoading: false, account: action.payload }

        case ADD_DATA_ACCOUNT_FAIL:
            return { ...state, isLoading: false, account: action.payload.message }

        default:
            return state
    }
}