const UPDATE_INPUT = 'UPDATE_INPUT'

const initialState = { 
    input: 0
}

export const updateInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return { input: action.payload }
        default:
            return state
    }
}