const GET_DATA_CARD_REQUEST = 'GET_DATA_CARD_REQUEST'
const GET_DATA_CARD_SUCCESS = 'GET_DATA_CARD_SUCCESS'
const GET_DATA_CARD_FAIL = 'GET_DATA_CARD_FAIL'

const initialStateCard = {
    cardInfo: [],
    isLoading: true,
    error: ''
}

export const cardInfoReducer = (state = initialStateCard, action) => {
    switch (action.type) {
        case GET_DATA_CARD_REQUEST:
            return { ...state, isLoading: true }

        case GET_DATA_CARD_SUCCESS:
            const a = state['accountInfo']
            const b = a.concat(action.payload)
            return { ...state, isLoading: false, cardInfo: b, error: '' }

        case GET_DATA_CARD_FAIL:
            return { ...state, isLoading: false, cardInfo: action.payload.message }

        default:
            return state
    }
}