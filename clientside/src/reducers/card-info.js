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
            // console.log('request')
            return { ...state, isLoading: true }

        case GET_DATA_CARD_SUCCESS:
            // console.log('success')
            return { ...state, isLoading: false, cardInfo: action.payload, error: '' }

        case GET_DATA_CARD_FAIL:
            return { ...state, isLoading: false, cardInfo: action.payload.message }

        default:
            // console.log('default')
            return state
    }
}