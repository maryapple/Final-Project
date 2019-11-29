const GET_CARDTYPE_REQUEST = 'GET_CARDTYPE_REQUEST'
const GET_CARDTYPE_SUCCESS = 'GET_CARDTYPE_SUCCESS'
const GET_CARDTYPE_FAIL = 'GET_CARDTYPE_FAIL'

const initialState = {
    data: [],
    isLoading: true
}

export const cardTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDTYPE_REQUEST:
            return { ...state, isLoading: true }

        case GET_CARDTYPE_SUCCESS:
            return { ...state, isLoading: false, data: action.payload}

        case GET_CARDTYPE_FAIL:
            return { ...state, isLoading: false, data: action.payload.message }

        default:
            return state
    }
}