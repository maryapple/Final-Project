const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const LOGIN_ERROR = 'LOGIN_ERROR'
const REGISTER_USER = 'REGISTER_USER'

const initialState = {
    currentUser: {},
    error: false,
    loggedIn: false,
    registered: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload, loggedIn: true }
        case LOGOUT_USER:
            return { ...state, currentUser: {}, loggedIn: false }
        case LOGIN_ERROR:
            return {...state, error: true}
        case REGISTER_USER:
            return { ...state, currentUser: action.payload, loggedIn: false, registered: true }
        default:
            return state;
    }
}