const ADD_DATA_CARD_REQUEST = 'ADD_DATA_CARD_REQUEST'
const ADD_DATA_CARD_SUCCESS = 'ADD_DATA_CARD_SUCCESS'
const ADD_DATA_CARD_FAIL = 'ADD_DATA_CARD_FAIL'

const initialStateCard = {
    card: {},
    isLoading: true
}

export const addCardReducer = (state = initialStateCard, action) => {
    switch (action.type) {
        case ADD_DATA_CARD_REQUEST:
            return { ...state, isLoading: true }

        case ADD_DATA_CARD_SUCCESS:
            console.log('here')
            return { ...state, isLoading: false, card: action.payload }

        case ADD_DATA_CARD_FAIL:
            return { ...state, isLoading: false, card: action.payload.message }

        default:
            return state
    }
}