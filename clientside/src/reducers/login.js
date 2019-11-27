const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const LOGIN_ERROR = 'LOGIN_ERROR'

const initialState = {
    currentUser: {},
    error: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload }
        case LOGOUT_USER:
            return { ...state, currentUser: {} }
        case LOGIN_ERROR:
            return {...state, error: true}
        default:
            return state;
    }
}