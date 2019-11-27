const LOGIN_USER = 'LOGIN_USER'

export const registerUser = user => {
    console.log(user)
    return dispatch => {
        return fetch("/api/auth/register", {
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
                    console.log(data, 'ОШИБКА')
                } else {
                    console.log('все ок, data:', data)
                    localStorage.setItem("token", data.jwt)
                    dispatch({
                        type: LOGIN_USER,
                        payload: data.user
                    })
                }
            })
    }
}
