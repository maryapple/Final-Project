const LOGIN_USER = 'LOGIN_USER'

const initialState = {
    currentUser: {}
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload }
        default:
            return state;
    }
}