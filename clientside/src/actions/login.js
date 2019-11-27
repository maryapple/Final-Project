const LOGIN_USER = 'LOGIN_USER'

export const loginUser = user => {
    console.log('USER action', user)
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
