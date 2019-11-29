const GET_ACCOUNTTYPE_REQUEST = 'GET_ACCOUNTTYPE_REQUEST'
const GET_ACCOUNTTYPE_SUCCESS = 'GET_ACCOUNTTYPE_SUCCESS'
const GET_ACCOUNTTYPE_FAIL = 'GET_ACCOUNTTYPE_FAIL'

const initialState = {
    data: [],
    isLoading: true
}

export const accountTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNTTYPE_REQUEST:
            return { ...state, isLoading: true }

        case GET_ACCOUNTTYPE_SUCCESS:
            return { ...state, isLoading: false, data: action.payload }

        case GET_ACCOUNTTYPE_FAIL:
            return { ...state, isLoading: false, data: action.payload.message }

        default:
            return state
    }
}