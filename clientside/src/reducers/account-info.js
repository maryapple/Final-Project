const GET_DATA_ACCOUNT_REQUEST = 'GET_DATA_ACCOUNT_REQUEST'
const GET_DATA_ACCOUNT_SUCCESS = 'GET_DATA_ACCOUNT_SUCCESS'
const GET_DATA_ACCOUNT_FAIL = 'GET_DATA_ACCOUNT_FAIL'

const initialStateAccount = {
    accountInfo: [],
    isLoading: true,
    error: ''
}

export const accountInfoReducer = (state = initialStateAccount, action) => {
    switch (action.type) {
        case GET_DATA_ACCOUNT_REQUEST:
            // console.log('request')
            return { ...state, isLoading: true }

        case GET_DATA_ACCOUNT_SUCCESS:
            // console.log('success')
            return { ...state, isLoading: false, accountInfo: action.payload, error: '' }

        case GET_DATA_ACCOUNT_FAIL:
            return { ...state, isLoading: false, accountInfo: action.payload.message }

        default:
            // console.log('default')
            return state
    }
}