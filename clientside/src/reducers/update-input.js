const UPDATE_INPUT = 'UPDATE_INPUT'

const initialState = { 
    input: {}
}

export const updateInputReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            // console.log('reducer: ',action.payload)
            return { input: action.payload }
        default:
            return state
    }
}