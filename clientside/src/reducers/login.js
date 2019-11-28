const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const LOGIN_ERROR = 'LOGIN_ERROR'

const initialState = {
    currentUser: {},
    error: false,
    loggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload, loggedIn: true }
        case LOGOUT_USER:
            return { ...state, currentUser: {}, loggedIn: false }
        case LOGIN_ERROR:
            return {...state, error: true}
        default:
            return state;
    }
}