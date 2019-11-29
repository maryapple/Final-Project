const LOGIN_USER = 'LOGIN_USER'
const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginUser = user => {
    // console.log('USER action', user)
    // const token = localStorage.token
    return dispatch => {
        return fetch("/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: data.user
                    })
                    console.log('----action ERROR------', data)
                } 
                else {
                    console.log('-------------action data--------------', data)
                    localStorage.setItem("token", data.token)
                    dispatch({
                        type: LOGIN_USER,
                        payload: data.user
                    })
                }
            })
    }
}

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        console.log("token", token)
        if (token) {
            return fetch("/api/profile/", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        localStorage.removeItem("token")
                    } 
                    else {
                        console.log("data", data)
                        dispatch({
                            type: LOGIN_USER,
                            payload: data
                        })
                    }
                })
        }
    }
}

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})