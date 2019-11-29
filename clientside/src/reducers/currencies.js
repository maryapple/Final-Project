const GET_DATA_CURRENCIES_REQUEST = 'GET_DATA_CURRENCIES_REQUEST'
const GET_DATA_CURRENCIES_SUCCESS = 'GET_DATA_CURRENCIES_SUCCESS'
const GET_DATA_CURRENCIES_FAIL = 'GET_DATA_CURRENCIES_FAIL'

const initialState = {
    data: [],
    isLoading: true,
    error: ''
}

export const currencyRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_CURRENCIES_REQUEST:
            return { ...state, isLoading: true }

        case GET_DATA_CURRENCIES_SUCCESS:
            return { ...state, isLoading: false, data: action.payload, error: '' }

        case GET_DATA_CURRENCIES_FAIL:
            return { ...state, isLoading: false, data: action.payload.message }

        default:
            return state
    }
}