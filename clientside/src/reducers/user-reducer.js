const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const GET_DATA_FAIL = 'GET_DATA_FAIL'

const initialState = {
    data: [],
    isLoading: true,
    error: ''
}

export const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return { ...state, isLoading: true }

        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, data: action.payload, error: '' }

        case GET_DATA_FAIL:
            return { ...state, isLoading: false, data: action.payload.message }

        default:
            return state
    }
}